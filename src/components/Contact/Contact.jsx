// import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (<footer id="contact" className={styles.container}>
  <div className={styles.text}>
  <h2>
  Contact
  </h2>
  <p>Feel Free to Reach out</p>
  </div>
  <ul className={styles.links}>
    <li className={styles.link}>
    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
    <a href="mailto:al1asgar@hotmail.com">al1asgar@hotmail.com</a>
    </li>
    <li className={styles.link}>
    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin Icon" />
    <a href="https://ca.linkedin.com/in/al1asgar-dohadwala5253">LinkedIn.com</a>
    </li>
    <li className={styles.link}>
    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
    <a href="mailto:al1asgar@hotmail.com">Github.com</a>
    </li>    
  </ul>
  
  </footer>  )
}
