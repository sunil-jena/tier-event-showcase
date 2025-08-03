import { currentUser } from '@clerk/nextjs/server';
import Events from '@/components/Events';
import { fetchEventsByTier } from '@/components/lib/fetchEventsByTier';
import { UserTier } from '@/components/types/tier';

const Page = async () => {
  const user = await currentUser();

  if (!user) return null;

  const tier = (user?.publicMetadata?.tier || 'free') as UserTier;
  const events = await fetchEventsByTier(tier);

  return <Events events={events} />;
};

export default Page;
