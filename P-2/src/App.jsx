import './App.css'
import Header from './components/header'
import Card from './components/card'
// if a component has no props, it is called a dumb component
function App() {

  return (
    <>
    <Header btn='Home'/>
    <h1>Hello</h1>
    <Card name='Sara' work='America'/>
    </>
  )
}

export default App
