import { useEffect, useState } from 'react'
import { getUser } from '../../data/auth'
import { getEvents } from '../../data/events'
import { getMatches } from '../../data/match'
import { Auth } from '../Auth'
import { Events } from '../Events'
import { Matches } from '../Matches'

export function App() {
  const [events, setEvents] = useState([])
  const [user, setUser] = useState({})
  const [matches, setMatches] = useState([])

  async function fetchEvents() {
    const response = await getEvents()
    setEvents(response)
  }

  async function fetchMatches() {
    const response = await getMatches(1)
    setMatches(response)
  }

  async function fetchUser() {
    const response = await getUser()
    setUser(response)
  }

  useEffect(() => {
    fetchEvents()
    fetchMatches()
    fetchUser()
  }, [])

  return (
    <div>
      <Auth user={user} onLogout={fetchUser} />

      <Events events={events} />

      <Matches matches={matches} />
    </div>
  )
}
