import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserContext'

function Users() {
  const context = useContext(UserContext)

  useEffect(() => {
    context.requestUsers()
  }, [])

  const { loading, users } = context
  if (loading) return <h1>Carregando...</h1>

  return (
    <ul>
      {users.map(user => (
        <li>{user.name}</li>
      ))}
    </ul>
  )
}

export default Users
