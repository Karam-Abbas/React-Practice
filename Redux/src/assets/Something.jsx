import React from 'react'
import { useSelector} from 'react-redux'
function Something() {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>Counter value in some other file: {count}</div>
  )
}

export default Something