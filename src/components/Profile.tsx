'use client'
import { useUser } from '@clerk/clerk-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TierBadge } from '@/components/ui/tier-badge';
import { useState } from 'react';
import { Crown, Star, Users, Zap } from 'lucide-react';
import { useToast } from './hooks/use-toast';
import { TIER_LABELS, UserTier } from './types/tier';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import Layout from './layout/layout';

const tierBenefits = {
  free: ['Access to free events', 'Community support', 'Basic resources'],
  silver: ['All Free benefits', 'Advanced workshops', 'Priority support', 'Early access'],
  gold: ['All Silver benefits', 'Expert-led sessions', 'Certification prep', 'Premium resources'],
  platinum: ['All Gold benefits', 'Exclusive events', 'VIP networking', 'Personal mentorship'],
};

const Profile = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const currentTier = (user?.unsafeMetadata?.tier as UserTier) || 'free';
  const [selectedTier, setSelectedTier] = useState<UserTier>(currentTier);
  const [isUpgrading, setIsUpgrading] = useState(false);

  const handleTierUpgrade = async () => {
    if (!user || selectedTier === currentTier) return;

    setIsUpgrading(true);

    try {
      // Update user metadata with new tier
      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          tier: selectedTier,
        },
      });

      toast({
        title: "Tier Updated Successfully!",
        description: `You've been upgraded to ${TIER_LABELS[selectedTier]} tier.`,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Update Failed",
        description: "There was an error updating your tier. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUpgrading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Profile Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your tier and view your benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Tier Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-primary" />
                Current Tier
              </CardTitle>
              <CardDescription>
                Your current membership level and benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <TierBadge tier={currentTier} className="text-lg px-6 py-2 mb-4" />
                <h3 className="text-2xl font-bold">{TIER_LABELS[currentTier]} Member</h3>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Star className="h-4 w-4 text-primary" />
                  Your Benefits:
                </h4>
                <ul className="space-y-2">
                  {tierBenefits[currentTier].map((benefit, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Tier Management Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Upgrade Tier
              </CardTitle>
              <CardDescription>
                Simulate upgrading to a higher tier for more benefits
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select New Tier:</label>
                <Select value={selectedTier} onValueChange={(value: UserTier) => setSelectedTier(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="silver">Silver</SelectItem>
                    <SelectItem value="gold">Gold</SelectItem>
                    <SelectItem value="platinum">Platinum</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedTier !== currentTier && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">New Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    {tierBenefits[selectedTier].map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                onClick={handleTierUpgrade}
                disabled={selectedTier === currentTier || isUpgrading}
                className="w-full bg-gradient-primary hover:opacity-90"
              >
                {isUpgrading ? 'Updating...' : selectedTier === currentTier ? 'Current Tier' : `Upgrade to ${TIER_LABELS[selectedTier]}`}
              </Button>
            </CardContent>
          </Card>

          {/* User Info Card */}
          <Card className="shadow-card md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <p className="text-lg">{user?.fullName || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="text-lg">{user?.primaryEmailAddress?.emailAddress || 'Not provided'}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                  <p className="text-lg">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
                  </p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Current Tier</label>
                  <div className="mt-1">
                    <TierBadge tier={currentTier} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;