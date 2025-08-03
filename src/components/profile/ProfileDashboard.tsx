'use client';

import { useUser } from '@clerk/clerk-react';
import { useState } from 'react';
import Layout from '@/components/layout/layout';
import { UserTier } from '@/components/types/tier';
import dynamic from 'next/dynamic';
import CurrentTierCardSkeleton from '@/components/profile/skeleton/CurrentTierCardSkeleton';
import UpgradeTierCardSkeleton from '@/components/profile/skeleton/UpgradeTierCardSkeleton';
import AccountInfoCardSkeleton from '@/components/profile/skeleton/AccountInfoCardSkeleton';
const CurrentTierCard = dynamic(
  () => import('@/components/profile/components/CurrentTierCard'),
  {
    ssr: false,
    loading: () => <CurrentTierCardSkeleton />,
  }
);
const UpgradeTierCard = dynamic(
  () => import('@/components/profile/components/UpgradeTierCard'),
  {
    ssr: false,
    loading: () => <UpgradeTierCardSkeleton />,
  }
);
const AccountInfoCard = dynamic(
  () => import('@/components/profile/components/AccountInfoCard'),
  {
    ssr: false,
    loading: () => <AccountInfoCardSkeleton />,
  }
);
export default function ProfileDashboard() {
  const { user } = useUser();
  const currentTier = user?.publicMetadata?.tier as UserTier;
  const [selectedTier, setSelectedTier] = useState<UserTier>(currentTier);
  const [isUpgrading, setIsUpgrading] = useState(false);

  return (
    <Layout>
      <div className='container mx-auto px-4 py-8 max-w-4xl'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>Profile Dashboard</h1>
          <p className='text-muted-foreground'>
            Manage your tier and view your benefits
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <CurrentTierCard tier={currentTier} />
          <UpgradeTierCard
            currentTier={currentTier}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
            isUpgrading={isUpgrading}
            setIsUpgrading={setIsUpgrading}
          />
          <AccountInfoCard user={user} tier={currentTier} />
        </div>
      </div>
    </Layout>
  );
}
