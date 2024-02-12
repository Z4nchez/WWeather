import styles from './App.module.css'
import Header from "../src/Components/Header/Header"
import Panel from "../src/Components/Panel/Panel"
import Footer from "../src/Components/Footer/Footer"

function App() {
  return (
    <div className={styles.Background0}>
      <Header></Header>
      <Panel></Panel>
      <Footer></Footer>
    </div>
  )
}

export default App
