import { useEffect, useState } from 'react'
import { getUser } from '../../data/auth'
import { getEvents } from '../../data/events'
import { Auth } from '../Auth'
import { Events } from '../Events'

export function App() {
  const [events, setEvents] = useState([])
  const [user, setUser] = useState({})

  async function fetchEvents() {
    const response = await getEvents()
    setEvents(response)
  }

  async function fetchUser() {
    const response = await getUser()
    setUser(response)
  }

  useEffect(() => {
    fetchEvents()
    fetchUser()
  }, [])

  return (
    <div>
      {events.map(({ id, name }) => `${id} ${name}`)}

      <Events></Events>

      <Auth user={user} onLogout={fetchUser} />
    </div>
  )
}
