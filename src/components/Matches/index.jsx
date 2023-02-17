import { List } from 'antd'

export function Matches({ matches }) {
  function renderItem({ home, away, winner }) {
    return (
      <List.Item>
        {home} vs {away}
      </List.Item>
    )
  }

  return <List bordered dataSource={matches} renderItem={renderItem} />
}
