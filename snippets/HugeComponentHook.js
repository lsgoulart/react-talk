import React, { useEffect, useState } from 'react'

function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  const [isOnline, setIsOnline] = useState(null)

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  }, [props.friend.id])

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }
  // ...
}
