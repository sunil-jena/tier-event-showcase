import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Star, Crown } from 'lucide-react';
import { TierBadge } from '@/components/ui/tier-badge';
import { TIER_LABELS, UserTier } from '@/components/types/tier';

const tierBenefits = {
  free: ['Access to free events', 'Community support', 'Basic resources'],
  silver: ['Advanced workshops', 'Priority support', 'Early access'],
  gold: ['Expert-led sessions', 'Certification prep', 'Premium resources'],
  platinum: ['Exclusive events', 'VIP networking', 'Personal mentorship'],
};

export default function CurrentTierCard({ tier }: { tier: UserTier }) {
  return (
    <Card className='shadow-card'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Crown className='h-5 w-5 text-primary' />
          Current Tier
        </CardTitle>
        <CardDescription>
          Your current membership level and benefits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='text-center mb-6'>
          <TierBadge tier={tier} className='text-lg px-6 py-2 mb-4' />
          <h3 className='text-2xl font-bold'>{TIER_LABELS[tier]} Member</h3>
        </div>
        <div className='space-y-3'>
          <h4 className='font-semibold flex items-center gap-2'>
            <Star className='h-4 w-4 text-primary' />
            Your Benefits:
          </h4>
          <ul className='space-y-2'>
            {tierBenefits[tier]?.map((benefit, index) => (
              <li key={index} className='flex items-center text-sm'>
                <span className='w-2 h-2 bg-primary rounded-full mr-3' />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
