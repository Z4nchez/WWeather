import { useState } from 'react'
import './App.css'
import Header from "../src/Components/Header/Header"
import Panel from "../src/Components/Panel/Panel"
import Footer from "../src/Components/Footer/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='Background0'>
      <Header></Header>
      <Panel></Panel>
      <Footer></Footer>
    </div>
  )
}

export default App
