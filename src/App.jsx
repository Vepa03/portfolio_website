import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Projects } from "./components/Projects/Projects"
import { Videos } from "./components/Videos/Videos"
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"
import { Projects_short } from "./components/Projects_short/Projects_short"


function HomePage() {
  return (
    <>
      <Hero/><About/><Experience/><Projects_short/><Videos/>
    </>
  );
}
function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/videos" element={<Videos/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
 