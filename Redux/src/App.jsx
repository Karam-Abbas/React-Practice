import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount,multiply,divide,setCounter } from './app/counter/counterSlice'
function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <div>
          <div>Counter:{count}</div>
          <button onClick={()=>dispatch(increment())}>+</button>
          <button onClick={()=>dispatch(decrement())}>-</button>
          <button onClick={()=>dispatch(incrementByAmount(10))}>+10</button>
          <button onClick={()=>dispatch(multiply())}>*2</button>
          <button onClick={()=>dispatch(divide())}>/2</button>
          <button onClick={()=>dispatch(setCounter(0))}>Reset</button>
      </div>
    </>
  )
}

export default App
