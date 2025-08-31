import React from 'react';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <h4 className={styles.subheading}>Get To Know More</h4>
      <h2 className={styles.heading}>About Me</h2>

      <div className={styles.aboutContainer}>
        <img className={styles.profileImg} src="/surat3.jpeg" alt="profile" />

        <div className={styles.aboutContent}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <img src="/medal.png" alt="experience" className={styles.icon} />
              <h3>Experience</h3>
              <p>1 year</p>
              <p>Flutter Development</p>
            </div>

            <div className={styles.card}>
              <img src="/education.png" alt="education" className={styles.icon} />
              <h3>Education</h3>
              <p>2024 - Present</p>
              <p>B.Sc. Bachelors Degree</p>
            </div>
          </div>

          <p className={styles.description}>
            I’m a Flutter Developer with over 1 year of experience building cross-platform mobile and web applications. 
            I focus on creating clean and responsive user interfaces with great attention to UI/UX design. 
            I have hands-on experience with Firebase, Django, REST APIs. 
          </p>
        </div>
      </div>
    </section>
  );
};
