import { auth, clerkClient } from '@clerk/nextjs/server';
import { UserTier } from '../types/tier';

type UpdateTierParams = {
  tier: UserTier;
};

export async function updateTier({
  tier,
}: UpdateTierParams): Promise<UserTier> {
  const { userId } = await auth();
  if (!userId) throw new Error('Unauthorized');

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const currentTier = user.publicMetadata?.tier as UserTier | undefined;

  if (currentTier !== tier) {
    const updatedUser = await client.users.updateUser(userId, {
      publicMetadata: {
        ...user.publicMetadata,
        tier,
      },
    });

    return updatedUser.publicMetadata?.tier as UserTier;
  }

  return currentTier || 'free';
}
