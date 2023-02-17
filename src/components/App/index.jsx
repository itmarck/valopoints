import { Typography } from 'antd'
import { useEffect, useState } from 'react'
import { getUser } from '../../data/auth'
import { getEvents } from '../../data/events'
import { getMatches } from '../../data/match'
import { getAllVotes } from '../../data/vote'
import { Auth } from '../Auth'
import { Board } from '../Board'
import { Events } from '../Events'
import { Matches } from '../Matches'

const { Title } = Typography

export function App() {
  const [events, setEvents] = useState([])
  const [user, setUser] = useState({})
  const [matches, setMatches] = useState([])
  const [votes, setVotes] = useState([])
  const activeEvent = 1

  async function fetchEvents() {
    const response = await getEvents()
    setEvents(response)
  }

  async function fetchMatches() {
    const response = await getMatches(activeEvent)
    setMatches(response)
  }

  async function fetchVotes() {
    const response = await getAllVotes(activeEvent)
    setVotes(response)
  }

  async function fetchUser() {
    const response = await getUser()
    setUser(response)
  }

  useEffect(() => {
    fetchEvents()
    fetchMatches()
    fetchVotes()
    fetchUser()
  }, [])

  return (
    <div>
      <Auth user={user} onLogout={fetchUser} />

      <Events events={events} />

      <Board votes={votes} matches={matches} />

      <Title level={5}>Partidos</Title>
      <Matches matches={matches} />
    </div>
  )
}
