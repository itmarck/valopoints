import { supabase } from './supabase'

export async function getEvents() {
  const { error, data } = await supabase.from('event').select()

  if (error) {
    return []
  }

  return data
}
