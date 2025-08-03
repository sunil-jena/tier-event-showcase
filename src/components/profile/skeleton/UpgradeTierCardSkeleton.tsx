'use client';

import { Skeleton } from '@/components/ui/skeleton';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function UpgradeTierCardSkeleton() {
  return (
    <Card className='shadow-card'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Skeleton className='h-5 w-5 rounded-full' />
          <Skeleton className='h-6 w-32' />
        </CardTitle>
        <CardDescription>
          <Skeleton className='h-4 w-64 mt-2' />
        </CardDescription>
      </CardHeader>

      <CardContent className='space-y-4'>
        <div className='space-y-2'>
          <Skeleton className='h-4 w-24' />
          <Skeleton className='h-10 w-full rounded-md' />
        </div>

        <div className='p-4 bg-muted/50 rounded-lg space-y-2'>
          <Skeleton className='h-4 w-32' />
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className='flex items-center gap-2'>
              <Skeleton className='h-2 w-2 rounded-full bg-primary' />
              <Skeleton className='h-4 w-48' />
            </div>
          ))}
        </div>

        <Skeleton className='h-10 w-full rounded-md' />
      </CardContent>
    </Card>
  );
}
