import styles from './App.module.css';
import { Education } from './components/Education/Education';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={styles.App}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      
    </div>
  );
}

export default App;
