import { Avatar, Button, Card, Space } from 'antd'
import { signin, signout } from '../../data/auth'

export function Auth({ user, onLogout }) {
  async function onLoginClick() {
    await signin()
  }

  async function onLogoutClick() {
    await signout()
    onLogout()
  }

  if (!user) {
    return <LoginButton onLogin={onLoginClick} />
  }

  return <UserCard user={user} onLogout={onLogoutClick} />
}

function UserCard({ user, onLogout }) {
  const { name, avatar } = user

  return (
    <Card
      title="Bienvenido"
      bordered={true}
      extra={<a onClick={onLogout}> Cerrar sesión </a>}
    >
      <Space>
        <Avatar src={avatar} />
        <span>{name}</span>
      </Space>
    </Card>
  )
}

function LoginButton({ onLogin }) {
  return (
    <Card title="Iniciar sesión" bordered={true}>
      <Button type="primary" color="secondary" onClick={onLogin}>
        Iniciar sesión con Twitch
      </Button>
    </Card>
  )
}
