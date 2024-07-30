import Login from '../components/Login'
import Profile from '../components/Profile'
import './App.css'
import ContextProvider from '../Context/ContextProvider'
function App() {
  return (
    <ContextProvider>
      <h1>React's context API</h1>
    <Login/>
    <Profile/>
    </ContextProvider>
  )
}

export default App
