'use client'
import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useToast } from './hooks/use-toast';
import { UserTier } from './types/tier';
import Link from 'next/link';
import { mockEvents } from './data/mock-events';
import { EventCard } from './ui/event-card';
import Layout from './layout/layout';

const Events = () => {
  const { user } = useUser();
  const { toast } = useToast();
  const userTier = (user?.unsafeMetadata?.tier as UserTier) || 'free';

  console.log(user);
  
  const handleUpgradeClick = () => {
    toast({
      title: "Upgrade Your Tier",
      description: "Visit your profile to upgrade and access more events.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Available Events</h1>
            <p className="text-muted-foreground">
              Discover events curated for your tier and interests
            </p>
          </div>

          <Link href="/profile">
            <Button variant="outline" className="mt-4 md:mt-0">
              <Settings className="h-4 w-4 mr-2" />
              Manage Tier
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              userTier={userTier}
              onUpgradeClick={handleUpgradeClick}
            />
          ))}
        </div>

        {mockEvents.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No events found</h3>
            <p className="text-muted-foreground">Check back later for new events!</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Events