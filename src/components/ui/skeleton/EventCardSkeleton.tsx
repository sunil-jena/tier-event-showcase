'use client';
import { Skeleton } from '@/components/ui/skeleton';

export default function EventCardSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className='rounded-lg overflow-hidden shadow-card transition-all duration-300 bg-card border'
        >
          <div className='relative aspect-video overflow-hidden'>
            <Skeleton className='h-48 w-full' />
            <div className='absolute top-3 right-3'>
              <Skeleton className='h-6 w-14 rounded-full' />
            </div>
          </div>

          <div className='p-4 pb-2 space-y-2'>
            <Skeleton className='h-5 w-3/4 rounded' />
            <Skeleton className='h-4 w-full rounded' />
            <Skeleton className='h-4 w-5/6 rounded' />
          </div>

          <div className='px-4 pb-4 pt-1 flex items-center justify-between text-sm text-muted-foreground'>
            <Skeleton className='h-4 w-28' />
          </div>
        </div>
      ))}
    </>
  );
}
