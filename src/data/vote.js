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

  const { error, data } = await supabase
    .from('vote')
    .select()
    .eq('user_id', user.id)

  if (error) {
    throw new Error('Algo salió mal')
  }

  const matchIds = data.map((vote) => vote.match_id)

  if (matchIds.includes(matchId)) {
    throw new Error('Ya tienes un voto en este partido')
  }

  await supabase.from('vote').insert({
    user_id: user.id,
    user_name: user.name,
    team: team,
    match_id: matchId,
  })
}
