// src/components/Projects/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./Projects.module.css";
import projects from "../../data/Projects.json";

export const ProjectDetail = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const project = projects.find((p) => p.id === numericId);

  if (!project) {
    return (
      <div className={styles.detailWrapper}>
        <Link to="/projects" className={styles.backLink}>
          ← Back to Projects
        </Link>
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div className={styles.detailWrapper}>
      <Link to="/projects" className={styles.backLink}>
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>

      <img
        src={project.ImageSrc}
        alt={project.title}
        className={styles.detailImage}
      />

      <p>{project.description}</p>

      <h3 className={styles.detailSkillsTitle}>Skills used:</h3>
      <ul className={styles.skills}>
        {project.skills.map((skill, index) => (
          <li key={index} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links} style={{ marginTop: "1.5rem" }}>
        <a
          href={project.download}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.btn1}
        </a>
        <a
          href={project.demo}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.btn2}
        </a>
      </div>
    </div>
  );
};
