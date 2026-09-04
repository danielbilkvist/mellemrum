import { fetchFromSupabase } from "../lib/supabase";

export function getAll() {
  return fetchFromSupabase("/events?order=date.asc&select=*,venue:venues(*)");
}

export async function getById(id) {
  const events = await fetchFromSupabase(
    `/events?id=eq.${id}&select=*,venue:venues(*)`,
  );

  return events[0] ?? null;
}
