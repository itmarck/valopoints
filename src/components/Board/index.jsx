import { Table } from 'antd'

const columns = [
  { title: 'Participante', dataIndex: 'name' },
  { title: 'Puntos', dataIndex: 'points' },
]

export function Board({ votes, matches }) {
  const userIds = votes.map((vote) => vote.user_id)
  const users = new Set(userIds)

  const data = []

  users.forEach((userId) => {
    let points = 0
    let name

    votes &&
      votes.forEach((vote) => {
        if (vote.user_name) name = vote.user_name

        if (vote.user_id == userId) {
          const match = matches.find((match) => match.id == vote.match_id)
          if (match && match.winner) {
            if (vote.team == match.winner) {
              points += 3
            } else {
              points -= 1
            }
          }
        }
      })

    data.push({
      id: userId,
      name: name,
      points: points,
    })
  })

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={data}
      bordered
      pagination={false}
    />
  )
}
