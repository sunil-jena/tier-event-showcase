import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  const { userId } = await auth();
  if (!userId)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const client = await clerkClient();
  const user = await client.users.getUser(userId);

  if (!user.publicMetadata?.tier) {
    await client.users.updateUser(userId, {
      publicMetadata: {
        ...user.publicMetadata,
        tier: user.publicMetadata.tire || 'free',
      },
    });

    return NextResponse.json({ message: 'Tier set to free' });
  }

  return NextResponse.json({
    message: 'Tier already set',
    tier: user.publicMetadata.tier,
  });
}
