import { Typography } from 'antd'

const { Title } = Typography

export function Events({ events }) {
  const activeEvent = events && events.at(0)
  const { name } = activeEvent || {}

  return <Title level={2}>{name}</Title>
}
