import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { TierBadge } from '@/components/ui/tier-badge';
import { CalendarDays } from 'lucide-react';
import eventPlaceholder from '@/components/assets/event-placeholder.jpg';
import { Event } from '../types/tier';
import Image from 'next/image';
import { cn } from '../lib/utils';
import { format } from 'date-fns';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const eventDate = new Date(event.event_date);

  return (
    <Card
      className={cn(
        'group relative overflow-hidden shadow-card transition-all duration-300',
        'hover:shadow-float hover:-translate-y-1'
      )}
    >
      <div className='aspect-video overflow-hidden'>
        <Image
          height={1280}
          width={720}
          src={event.image || eventPlaceholder}
          alt={event.title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <div className='absolute top-3 right-3'>
          <TierBadge tier={event.tier} />
        </div>
      </div>

      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between gap-2'>
          <CardTitle className='line-clamp-2 text-lg'>{event.title}</CardTitle>
        </div>
        <CardDescription className='line-clamp-2'>
          {event.description}
        </CardDescription>
      </CardHeader>

      <CardContent className='pt-0'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <CalendarDays className='h-4 w-4' />
            {format(eventDate, 'MMM dd, yyyy')}
          </div>

          {/* <Button
            size="sm"
            variant="outline"
            onClick={onUpgradeClick}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Upgrade to {TIER_LABELS[event.tier]}
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}
