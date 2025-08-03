'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Zap } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { TIER_LABELS, UserTier } from '@/components/types/tier';
import { useToast } from '@/components/hooks/use-toast';

const tierBenefits: Record<UserTier, string[]> = {
  free: ['Access to free events', 'Community support', 'Basic resources'],
  silver: ['Advanced workshops', 'Priority support', 'Early access'],
  gold: ['Expert-led sessions', 'Certification prep', 'Premium resources'],
  platinum: ['Exclusive events', 'VIP networking', 'Personal mentorship'],
};

export default function UpgradeTierCard({
  currentTier,
  selectedTier,
  setSelectedTier,
  isUpgrading,
  setIsUpgrading,
}: {
  currentTier: UserTier;
  selectedTier: UserTier;
  setSelectedTier: (val: UserTier) => void;
  isUpgrading: boolean;
  setIsUpgrading: (val: boolean) => void;
}) {
  console.log(currentTier, 'currentTier');

  const router = useRouter();
  const { toast } = useToast();

  const handleUpgrade = async () => {
    if (selectedTier === currentTier) return;
    setIsUpgrading(true);
    try {
      const res = await axios.post('/api/update-tier', { tier: selectedTier });
      if (res.status === 200) {
        toast({
          title: 'Tier Updated Successfully!',
          description: `You've been upgraded to ${TIER_LABELS[selectedTier]} tier.`,
        });
        router.replace('/events');
        router.refresh();
      }
    } catch {
      toast({
        title: 'Update Failed',
        description: 'There was an error updating your tier.',
        variant: 'destructive',
      });
    } finally {
      setIsUpgrading(false);
    }
  };

  return (
    <Card className='shadow-card'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Zap className='h-5 w-5 text-primary' />
          Upgrade Tier
        </CardTitle>
        <CardDescription>
          Simulate upgrading to a higher tier for more benefits
        </CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <label className='text-sm font-medium'>Select New Tier:</label>
          <Select
            value={selectedTier || currentTier}
            onValueChange={(val) => setSelectedTier(val as UserTier)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='free'>Free</SelectItem>
              <SelectItem value='silver'>Silver</SelectItem>
              <SelectItem value='gold'>Gold</SelectItem>
              <SelectItem value='platinum'>Platinum</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedTier !== currentTier && (
          <div className='p-4 bg-muted/50 rounded-lg'>
            <h4 className='font-semibold mb-2'>New Benefits:</h4>
            <ul className='space-y-1 text-sm'>
              {selectedTier &&
                tierBenefits[selectedTier]?.map((benefit, index) => (
                  <li key={index} className='flex items-center'>
                    <span className='w-2 h-2 bg-primary rounded-full mr-2' />
                    {benefit}
                  </li>
                ))}
            </ul>
          </div>
        )}

        <Button
          onClick={handleUpgrade}
          disabled={selectedTier === currentTier || isUpgrading}
          className='w-full bg-gradient-primary hover:opacity-90'
        >
          {isUpgrading
            ? 'Updating...'
            : selectedTier === currentTier
              ? 'Current Tier'
              : `Upgrade to ${TIER_LABELS[selectedTier]}`}
        </Button>
      </CardContent>
    </Card>
  );
}
