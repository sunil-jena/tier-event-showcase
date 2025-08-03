import { cn } from '@/components/lib/utils';
import { TIER_COLORS, TIER_LABELS, UserTier } from '../types/tier';
import { Badge } from './badge';
interface TierBadgeProps {
  tier: UserTier;
  className?: string;
}

export function TierBadge({ tier, className }: TierBadgeProps) {
  const tierColorClass = TIER_COLORS[tier];
  return (
    <Badge
      className={cn(
        `bg-${tierColorClass} text-${tierColorClass}-foreground border-0 font-medium`,
        tier === 'free' && 'bg-gradient-tier-free',
        tier === 'silver' && 'bg-gradient-tier-silver',
        tier === 'gold' && 'bg-gradient-tier-gold',
        tier === 'platinum' && 'bg-gradient-tier-platinum',
        className
      )}
    >
      {TIER_LABELS[tier]}
    </Badge>
  );
}
