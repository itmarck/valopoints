import { getUser } from './auth'
import { supabase } from './supabase'

export async function getAllVotes(eventId) {
  const { error, data } = await supabase.rpc('votes_per_event', {
    the_event_id: eventId,
  })

  if (error) {
    return []
  }

  return data
}

export async function createVote(team, matchId) {
  const user = await getUser()

  if (!user) {
    console.error('No user')
    return
  }

  await supabase.from('vote').insert({
    user_id: user.id,
    user_name: user.name,
    team: team,
    match_id: matchId,
  })
}
