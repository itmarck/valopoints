import { List, notification, Popconfirm, Typography } from 'antd'
import { createVote } from '../../data/vote'

const { Item } = List
const { Text } = Typography

export function Matches({ matches }) {
  return (
    <List
      bordered
      dataSource={matches}
      renderItem={(props) => <MatchItem {...props} />}
    />
  )
}

function MatchItem({ id, home, away, winner }) {
  async function onTeamClick(team) {
    await createVote(team, id)

    notification.open({
      type: 'success',
      message: 'Voto enviado',
      description: `Has votado por ${team}`,
    })
  }

  return (
    <Item>
      <Team winner={winner} onClick={onTeamClick} team={home} />
      <span> vs </span>
      <Team winner={winner} onClick={onTeamClick} team={away} />
    </Item>
  )
}

function Team({ team, winner, onClick }) {
  const type = team === winner && 'success'
  const strong = team === winner

  function onConfirm() {
    onClick(team)
  }

  return (
    <Popconfirm
      title={`¿Enviar voto para ${team}?`}
      description="El voto no puede ser cambiado"
      onConfirm={onConfirm}
    >
      <a>
        <Text type={type} strong={strong}>
          {team}
        </Text>
      </a>
    </Popconfirm>
  )
}
