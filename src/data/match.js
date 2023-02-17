import { supabase } from './supabase'

export async function getMatches(eventId) {
  const { error, data } = await supabase
    .from('match')
    .select()
    .eq('event_id', eventId)

  if (error) {
    return []
  }

  return data
}
