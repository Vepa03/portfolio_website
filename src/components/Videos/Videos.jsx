import React from 'react';
import styles from './Videos.module.css';
import videos from "../../data/videos.json";

export const Videos = () => {

  return (
    <section className={styles.contain} id='videos'>
      <h4 className={styles.subheading}>Browse My Recent</h4>
      <h2 className={styles.heading}>Videos</h2>
      <div className={styles.projects}>
        {videos.map((video, id) => (
          <div key={id} className={styles.container}>
            <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.video}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
            <h3 className={styles.title}>{video.name}</h3>

            {/* ÇEVİRİLEN AÇIKLAMA */}
            <p className={styles.description}>{video.description}</p>
          </div>
        ))}
      </div>
      <a className={styles.morevideo} href='https://www.youtube.com/@vepa_babayev' target="_blank" rel="noopener noreferrer">
                Browse My More Videos
              </a>
      
    </section>
  );
};