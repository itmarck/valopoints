import { Button } from 'antd'
import { signin, signout } from '../../data/auth'

export function Auth({ user, onLogout }) {
  async function onLoginClick() {
    await signin()
  }

  async function onLogoutClick() {
    await signout()
    onLogout()
  }

  if (user) {
    const { name } = user

    return (
      <div>
        {name}
        <Button onClick={onLogoutClick}> Cerrar sesión </Button>
      </div>
    )
  }

  return (
    <div>
      <Button type="primary" onClick={onLoginClick}>
        Iniciar sesión con Twitch
      </Button>
    </div>
  )
}
