import { auth, clerkClient } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const newTier = body?.tier;

  if (!newTier) {
    return NextResponse.json(
      { error: 'Tier value is required' },
      { status: 400 }
    );
  }

  try {
    const client = await clerkClient();
    const updated = await client.users.updateUser(userId, {
      publicMetadata: {
        tier: newTier,
      },
    });

    return NextResponse.json({
      status: 200,
      message: `Tier successfully updated to "${newTier}"`,
      tier: updated.publicMetadata.tier,
    });
  } catch (err: unknown) {
    let errorMessage = 'Unknown error';
    if (err instanceof Error) {
      errorMessage = err.message;
    }
    return NextResponse.json(
      {
        error: 'Failed to update user tier',
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
