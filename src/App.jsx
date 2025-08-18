import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Contacts } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Videos } from "./components/Videos/Videos"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Routes>
        <Route path="/experiences" element={<Experience/>}/>
      </Routes>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Videos/>
      <Contacts/>
    </div>
  )
}

export default App
 