import styles from './App.module.css'
import { Education } from './components/Education/Education'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {


  return (<div className={styles.App}> <Navbar />
    <Hero/>
    <Experience/>
    <Projects/>
    <Education/>
    <Contact/>
  </div>)
}

export default App
