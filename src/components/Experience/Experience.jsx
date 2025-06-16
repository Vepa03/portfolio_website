import React from 'react';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <h4 className={styles.subheading}>Explore My</h4>
      <h2 className={styles.heading}>Experience</h2>

      <div className={styles.container}>
        {/* Frontend */}
        <div className={styles.box}>
          <h3 className={styles.title}>Frontend Development</h3>
          <ul className={styles.list}>
            <li>
              <img src= "./react.png" alt="react" />
              <div>
                <strong>React</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <img src= "./html.png" alt="HTML" />
              <div>
                <strong>HTML</strong>
                <p>Intermediate</p>
              </div>
            </li>
            <li>
              <img src= "./css.png" alt="CSS" />
              <div>
                <strong>CSS</strong>
                <p>Intermediate</p>
              </div>
            </li>
            <li>
              <img src= "./flutter.png" alt="Flutter" />
              <div>
                <strong>Flutter</strong>
                <p>Intermediate</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className={styles.box}>
          <h3 className={styles.title}>Backend Development</h3>
          <ul className={styles.list}>
            <li>
              <img src= "./django.png" alt="Django" />
              <div>
                <strong>Django</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <img src= "./firebase.png" alt="Firebase" />
              <div>
                <strong>Firebase</strong>
                <p>Basic</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.box}>
          <h3 className={styles.title}>Programming Languages</h3>
          <ul className={styles.list}>
            <li>
              <img src= "./dart.png" alt="Dart" />
              <div>
                <strong>Dart</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <img src= "./python.png" alt="Python" />
              <div>
                <strong>Python</strong>
                <p>Basic</p>
              </div>
            </li>
            <li>
              <img src= "./js.png" alt="JS" />
              <div>
                <strong>JavaScript</strong>
                <p>Basic</p>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.box}>
          <h3 className={styles.title}>Tools & Design</h3>
          <ul className={styles.list}>
            <li>
              <img src= "./figma.png" alt="Figma" />
              <div>
                <strong>Figma</strong>
                <p>Intermediate</p>
              </div>
            </li>
            <li>
              <img src= "./github.png" alt="GitHub" />
              <div>
                <strong>GitHub</strong>
                <p>Intermediate</p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};
