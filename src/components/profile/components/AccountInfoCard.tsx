/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import { TierBadge } from '@/components/ui/tier-badge';
import { UserTier } from '@/components/types/tier';

export default function AccountInfoCard({
  user,
  tier,
}: {
  user: any;
  tier: UserTier;
}) {
  return (
    <Card className='shadow-card md:col-span-2'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Users className='h-5 w-5 text-primary' />
          Account Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <label className='text-sm font-medium text-muted-foreground'>
              Name
            </label>
            <p className='text-lg'>{user?.fullName || 'Not provided'}</p>
          </div>
          <div>
            <label className='text-sm font-medium text-muted-foreground'>
              Email
            </label>
            <p className='text-lg'>
              {user?.primaryEmailAddress?.emailAddress || 'Not provided'}
            </p>
          </div>
          <div>
            <label className='text-sm font-medium text-muted-foreground'>
              Member Since
            </label>
            <p className='text-lg'>
              {user?.createdAt
                ? new Date(user.createdAt).toLocaleDateString()
                : 'Unknown'}
            </p>
          </div>
          <div>
            <label className='text-sm font-medium text-muted-foreground'>
              Current Tier
            </label>
            <div className='mt-1'>
              <TierBadge tier={tier} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
