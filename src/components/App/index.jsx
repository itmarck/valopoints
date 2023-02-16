import { useEffect, useState } from 'react'
import { getEvents } from '../../data/events'
import { Events } from '../Events'

export function App() {
  const [events, setEvents] = useState([])

  async function fetchEvents() {
    const response = await getEvents()
    setEvents(response)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <div>
      {events.map(({ id, name }) => `${id} ${name}`)}
      <Events></Events>
    </div>
  )
}
