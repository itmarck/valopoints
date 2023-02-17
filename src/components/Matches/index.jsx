import { List } from 'antd'
import { createVote } from '../../data/vote'

import './Matches.css'

export function Matches({ matches }) {
  async function onTeamClick(team, match) {
    await createVote(team, match)
    alert('Voto enviado')
  }

  function renderItem({ id, home, away, winner }) {
    const homeClass = winner === home ? 'team winner' : 'team'
    const awayClass = winner === away ? 'team winner' : 'team'

    return (
      <List.Item>
        <span className={homeClass} onClick={() => onTeamClick(home, id)}>
          {home}
        </span>
        <span> vs </span>
        <span className={awayClass} onClick={() => onTeamClick(away, id)}>
          {away}
        </span>
      </List.Item>
    )
  }

  return <List bordered dataSource={matches} renderItem={renderItem} />
}
