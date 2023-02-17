import { getUser } from './auth'
import { supabase } from './supabase'

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
