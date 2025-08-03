import { auth, clerkClient } from '@clerk/nextjs/server';
import { UserTier } from '../types/tier';

export async function ensureTier(): Promise<UserTier> {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const currentTier = user.publicMetadata?.tier;

  if (!currentTier) {
    await client.users.updateUser(userId, {
      publicMetadata: {
        ...user.publicMetadata,
        tier: user.publicMetadata.tire || 'free',
      },
    });
  }

  return currentTier as UserTier;
}
