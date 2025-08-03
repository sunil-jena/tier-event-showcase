'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function AccountInfoCardSkeleton() {
  return (
    <Card className='shadow-card md:col-span-2'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Skeleton className='h-5 w-5 rounded-full' />
          <Skeleton className='h-6 w-48' />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-4'>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className='space-y-2'>
              <Skeleton className='h-4 w-24' />
              <Skeleton className='h-5 w-48' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
