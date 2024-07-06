// import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Education.module.css"


export const Education = () => {
  return (<section className={styles.container} id="education">
    <h2 className={styles.title}>Education</h2>
    <div className={styles.content}>
      <img src={getImageUrl("edu/mygradpic.jpg")}
        alt="Me Sitting with Laptop"
        className={styles.eduImage}
      />
      <ul className={styles.eduItems}>

        <li className={styles.eduItem}>
          <img className={styles.collegeImg} src={getImageUrl("edu/centennial.png")} alt="Centennial Icon" />
          <div className={styles.eduItemText}>
            <h3>Software Engineering Technician</h3>
            {/* <p>I am a Front End Developer 
  with experience in building responsive and optimized sites</p> */}
          </div>
        </li>
        
        <li className={styles.eduItem}>
          <img className={styles.collegeImg} src={getImageUrl("edu/canadore.png")} alt="Centennial Icon" />
          <div className={styles.eduItemText}>
            <h3>IT - Project Management</h3>
            {/* <p>I am a Front End Developer 
  with experience in building responsive and optimized sites</p> */}
          </div>
        </li>
        
        <li className={styles.eduItem}>
          <img className={styles.collegeImggls} src={getImageUrl("edu/gls.jpg")} alt="Centennial Icon" />
          <div className={styles.eduItemText}>
            <h3>Bachelors in Computer Application</h3>
            {/* <p><b>Coursework :</b> Programming Logic and Algorithms, Data Structures and Algorithms, HTML5, CSS for Web Styling, Operating Systems, Angular Framework, Data Visualization, WordPress, Joomla Content Management System, XML, Data Analytics Tools, Python & R Language, Cryptography, Mobile App UI/UX Design.
  <br></br><b> GPA :</b> 3.5/4.0</p> */}
          </div>
        </li>

      </ul>
    </div>
  </section>
  );
};
