// src/components/Projects/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
import projects from "../../data/Projects.json";

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.contain} id="projects">
      <h2 className={styles.heading}>Projects</h2>

      <div className={styles.projects}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.container}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <img
              src={project.ImageSrc}
              alt={project.title}
              className={styles.image}
            />

            <h3 className={styles.title}>{project.title}</h3>

            <p className={styles.description}>{project.description}</p>

            <ul className={styles.skills}>
              {project.skills.map((skill, index) => (
                <li key={index} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>

            <div className={styles.links}>
              <a
                href={project.download}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // kart tıklamasını bozmasın
              >
                {project.btn1}
              </a>
              <a
                href={project.demo}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {project.btn2}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
