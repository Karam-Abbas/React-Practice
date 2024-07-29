import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const { userId } = useParams()
  return (
    <div className='bg-orange-500 flex items-center justify-center py-5 text-3xl'>User:{userId}</div>
  )
}

export default User