import React from 'react';
import styles from './Projects.module.css';
import projects from "../../data/Projects.json";

export const Projects = () => {

  return (
    <section className={styles.contain} id='projects'>
      {/* <h4 className={styles.subheading}>Browse My Recent</h4> */}
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <div key={id} className={styles.container}>
            <img src={project.ImageSrc} alt={project.title} className={styles.image} />
            <h3 className={styles.title}>{project.title}</h3>

            {/* ÇEVİRİLEN AÇIKLAMA */}
            <p className={styles.description}>{project.description}</p>

            {/* ÇEVİRİLEN BECERİLER */}
            <ul className={styles.skills}>
              {project.skills.map((skill, index) => (
                <li key={index} className={styles.skill}>{skill}</li>
              ))}
            </ul>

            <div className={styles.links}>
              <a href={project.download} className={styles.link}>{project.btn1}</a>  
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>{project.btn2}</a>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};