import { supabase } from './supabase'

export async function getUser() {
  const { error, data } = await supabase.auth.getUser()

  if (error) return

  return {
    id: data.user.id,
    name: data.user.user_metadata.name,
    avatar: data.user.user_metadata.avatar_url,
  }
}

export async function signin() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'twitch',
  })

  if (error) {
    console.error(error)
  }
}

export async function signout() {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
  }
}
