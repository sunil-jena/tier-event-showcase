'use client';

import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { CalendarDays, Home, Settings, User as UserIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TierBadge } from '@/components/ui/tier-badge';
import { useState } from 'react';
import { UserTier } from '@/components/types/tier';
import { cn } from '../lib/utils';

export function Header() {
  const { user, isSignedIn } = useUser();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userTier = (user?.publicMetadata?.tier as UserTier) || 'free';

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Events', href: '/events', icon: CalendarDays },
    { name: 'Profile', href: '/profile', icon: UserIcon },
  ];

  return (
    <header className='sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <CalendarDays className='h-6 w-6 text-primary' />
          <span className='font-bold text-xl'>TierEvents</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          <SignedIn>
            {navItems.slice(1).map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1',
                  pathname === href ? 'text-primary' : 'text-foreground/60'
                )}
              >
                <Icon className='h-4 w-4' />
                {name}
              </Link>
            ))}
          </SignedIn>
        </nav>

        {/* Right Side */}
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
            <Link href='/sign-in'>
              <Button className='bg-gradient-primary hover:opacity-90'>
                Sign In
              </Button>
            </Link>
          </SignedOut>

          {/* Mobile Menu Toggle */}
          <button
            className='md:hidden focus:outline-none'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className='w-6 h-6 text-foreground'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              viewBox='0 0 24 24'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className='md:hidden border-t py-4 px-4 space-y-4'>
          <nav className='flex flex-col space-y-3'>
            {navItems.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className='flex items-center gap-3 text-foreground/80 hover:text-foreground transition-smooth p-2 rounded-md hover:bg-muted'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon className='h-4 w-4' />
                {name}
              </Link>
            ))}
          </nav>

          {isSignedIn ? (
            <div className='space-y-3'>
              <Button variant='outline' className='w-full' asChild>
                <Link
                  href='/profile'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Settings className='h-4 w-4 mr-2' />
                  Settings
                </Link>
              </Button>
            </div>
          ) : (
            <div className='border-t pt-4 space-y-2'>
              <Button variant='outline' className='w-full' asChild>
                <Link
                  href='/sign-in'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </Button>
              <Button className='w-full bg-gradient-primary' asChild>
                <Link
                  href='/sign-up'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
