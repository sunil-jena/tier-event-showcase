'use client'
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center space-x-2 mb-6">
                        <CalendarDays className="h-8 w-8 text-primary" />
                        <span className="font-bold text-2xl">TierEvents</span>
                    </Link>
                    <h1 className="text-3xl font-bold mb-2">
                        {isSignUp ? 'Create Account' : 'Welcome Back'}
                    </h1>
                    <p className="text-muted-foreground">
                        {isSignUp
                            ? 'Join TierEvents to access exclusive tier-based events'
                            : 'Sign in to access your tier-based events'
                        }
                    </p>
                </div>

                <div className='flex items-center justify-center'>
                    {isSignUp ? (
                        <SignUp
                            appearance={{
                                elements: {
                                    formButtonPrimary: 'bg-gradient-primary hover:opacity-90',
                                    card: 'shadow-none border-0',
                                    headerTitle: 'hidden',
                                    headerSubtitle: 'hidden',
                                }
                            }}
                            afterSignUpUrl="/profile"
                            redirectUrl="/profile"
                        />
                    ) : (
                        <SignIn
                            appearance={{
                                elements: {
                                    formButtonPrimary: 'bg-gradient-primary hover:opacity-90',
                                    card: 'shadow-none border-0',
                                    headerTitle: 'hidden',
                                    headerSubtitle: 'hidden',
                                }
                            }}
                            afterSignInUrl="/events"
                            redirectUrl="/events"
                        />
                    )}

                </div>

                <div className="mt-6 text-center">
                    <Button
                        variant="ghost"
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-sm"
                    >
                        {isSignUp
                            ? 'Already have an account? Sign in'
                            : "Don't have an account? Sign up"
                        }
                    </Button>
                </div>
                <div className="mt-8 text-center">
                    <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                        ← Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;