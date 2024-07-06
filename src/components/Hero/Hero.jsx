// import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {

    return (
        <section className={styles.container}>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am AliAsgar</h1>
                <p className={styles.description}>
                    I am a results-oriented professional with proficiency in HTML5, CSS, Java, the MERN stack (MongoDB, Express.js, React, Node.js) Python and R, as well as web development with Joomla, and WordPress.
                    <br /><br />
                    With experience in data visualization, cryptography, and UI/UX design, I am a versatile communicator with a solid grasp of data management practices and Agile methodology. I am passionate about UX Design and eager to contribute to dynamic projects, ensuring success through technical proficiency and effective communication.
                    <br /><br />
                    Reach out if you like to learn more
                </p>
                <div className={styles.butts}>
                    <div>
                
                    </div>
                    {/* <a href="/resume.pdf" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">Download My Resume</a> */}
                    <a className={styles.contactBtn} href="https://ca.linkedin.com/in/al1asgar-dohadwala5253">My LinkedIn Profile</a>
                </div>
            </div>
        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpeg")} alt="Hero Image" />
        </section>
    );
}
