import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Contacts } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Contacts/>
    </div>
  )
}

export default App
 