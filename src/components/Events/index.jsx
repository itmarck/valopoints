export function Events({ events }) {
  if (events && events.length == 0) {
    return <div>No hay eventos activos</div>
  }

  const activeEvent = events.at(0)
  const { id, name } = activeEvent

  return <h1 key={id}> {name} </h1>
}
