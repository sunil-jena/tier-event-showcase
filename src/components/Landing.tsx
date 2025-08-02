// File: app/page.tsx
'use client';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarDays, Star, Users, Zap } from 'lucide-react';
import { TierBadge } from '@/components/ui/tier-badge';
import heroBg from '@/components/assets/hero-bg.jpg';
import Link from 'next/link';
import { UserTier } from './types/tier';
import { cn } from './lib/utils';
import Layout from './layout/layout';

const tierFeatures = [
  {
    tier: 'free' as UserTier,
    title: 'Free Tier',
    description: 'Get started with basic events',
    features: ['Access to free events', 'Community support', 'Basic resources'],
    highlighted: false,
  },
  {
    tier: 'silver' as UserTier,
    title: 'Silver Tier',
    description: 'Enhanced learning experience',
    features: ['All Free features', 'Advanced workshops', 'Priority support'],
    highlighted: false,
  },
  {
    tier: 'gold' as UserTier,
    title: 'Gold Tier',
    description: 'Professional development',
    features: ['All Silver features', 'Expert-led sessions', 'Certification prep'],
    highlighted: true,
  },
  {
    tier: 'platinum' as UserTier,
    title: 'Platinum Tier',
    description: 'Exclusive access & networking',
    features: ['All Gold features', 'Exclusive events', 'VIP networking'],
    highlighted: false,
  },
];

const Landing = () => {

  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <CalendarDays className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Tier-Based Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Access exclusive events tailored to your tier. Level up your skills with curated experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignedOut>
                <Link href="/auth">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-3">
                    Get Started
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-black">
                    Sign Up
                  </Button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/events">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-3">
                    View Events
                  </Button>
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TierEvents?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience curated events designed for your skill level and professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Curated Content</h3>
                <p className="text-muted-foreground">Hand-picked events by industry experts</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p className="text-muted-foreground">Connect with like-minded professionals</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-float transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Progressive Learning</h3>
                <p className="text-muted-foreground">Advance through tiers as you grow</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Tier</h2>
            <p className="text-xl text-muted-foreground">
              Each tier unlocks exclusive events and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tierFeatures.map((tier) => (
              <Card
                key={tier.tier}
                className={cn(
                  "relative shadow-card transition-all duration-300 hover:shadow-float hover:-translate-y-1",
                  tier.highlighted && "ring-2 ring-primary shadow-tier"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <TierBadge tier={tier.tier} className="mb-3" />
                    <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
                    <p className="text-muted-foreground">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Star className="h-4 w-4 text-primary mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <SignedOut>
                    <Link href="/auth">
                      <Button
                        className={cn(
                          "w-full",
                          tier.highlighted
                            ? "bg-gradient-primary hover:opacity-90"
                            : "variant-outline border-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                        )}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </SignedOut>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Landing;