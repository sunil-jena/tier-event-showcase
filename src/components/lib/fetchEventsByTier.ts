import { createServerClient } from '@supabase/ssr';

export type Tier = 'free' | 'silver' | 'gold' | 'platinum';

export async function fetchEventsByTier(tier: Tier) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => [],
        setAll: () => {},
      },
    }
  );

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('tier', tier)
    .order('event_date', { ascending: true });

  if (error) throw new Error(error.message);

  return data;
}
