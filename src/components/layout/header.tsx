'use client';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { CalendarDays, User } from 'lucide-react';
import { UserTier } from '../types/tier';
import Link from 'next/link';
import { TierBadge } from '../ui/tier-badge';
import { cn } from '../lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
  const { user } = useUser();
  const pathname = usePathname();

  const userTier = (user?.publicMetadata?.tier as UserTier) || 'free';

  return (
    <header className='sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <CalendarDays className='h-6 w-6 text-primary' />
          <span className='font-bold text-xl'>TierEvents</span>
        </Link>

        <nav className='hidden md:flex items-center space-x-6'>
          <SignedIn>
            <Link
              href='/events'
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === '/events' ? 'text-primary' : 'text-foreground/60'
              )}
            >
              Events
            </Link>
            <Link
              href='/profile'
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary flex items-center gap-2',
                pathname === '/profile' ? 'text-primary' : 'text-foreground/60'
              )}
            >
              <User className='h-4 w-4' />
              Profile
            </Link>
          </SignedIn>
        </nav>

        <div className='flex items-center space-x-4'>
          <SignedIn>
            <TierBadge tier={userTier} />
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'h-9 w-9',
                },
              }}
              afterSignOutUrl='/'
            />
          </SignedIn>
          <SignedOut>
            <Link href='/login'>
              <Button className='bg-gradient-primary hover:opacity-90'>
                Sign In
              </Button>
            </Link>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
