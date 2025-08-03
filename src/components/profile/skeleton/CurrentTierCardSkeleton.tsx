'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function CurrentTierCardSkeleton() {
  return (
    <Card className='shadow-card'>
      <CardHeader>
        <div className='flex items-center gap-2 mb-2'>
          <Skeleton className='h-5 w-5 rounded-full' />
          <Skeleton className='h-6 w-32' />
        </div>
        <Skeleton className='h-4 w-64' />
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='text-center'>
          <Skeleton className='h-10 w-32 mx-auto rounded-full mb-4' />
          <Skeleton className='h-6 w-48 mx-auto' />
        </div>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-28' />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='flex items-center gap-3'>
              <Skeleton className='h-2 w-2 rounded-full bg-primary' />
              <Skeleton className='h-4 w-48' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
