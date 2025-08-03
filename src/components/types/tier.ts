export type UserTier = 'free' | 'silver' | 'gold' | 'platinum';

export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  tier: UserTier;
  image?: string;
}

export const TIER_HIERARCHY: Record<UserTier, number> = {
  free: 1,
  silver: 2,
  gold: 3,
  platinum: 4,
};

export const TIER_COLORS: Record<UserTier, string> = {
  free: 'tier-free',
  silver: 'tier-silver',
  gold: 'tier-gold',
  platinum: 'tier-platinum',
};

export const TIER_LABELS: Record<UserTier, string> = {
  free: 'Free',
  silver: 'Silver',
  gold: 'Gold',
  platinum: 'Platinum',
};
