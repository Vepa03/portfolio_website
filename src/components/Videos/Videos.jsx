import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Videos.module.css';
import videos from "../../data/videos.json";

export const Videos = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.contain} id='videos'>
      <h2 className={styles.heading}>Videos</h2>
      <div className={styles.projects}>
        {videos.map((video, index) => (
          <div 
            key={index} 
            className={styles.container}
            onClick={() => navigate(`/videos/${index}`)}  // 🔹 index ile git
          >
            <iframe
              className={styles.videoFrame}
              src={`https://www.youtube.com/embed/${video.video}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>

            <h3 className={styles.title}>{video.name}</h3>
            <p className={styles.description}>{video.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.morevideo}>
        <ul>
          <li>
            <a
              href='https://www.youtube.com/@vepa_babayev'
              target="_blank"
              rel="noopener noreferrer"
            >
              Browse My More Videos
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
