import React from "react";
import { useParams, Link } from "react-router-dom";
import videos from "../../data/videos.json";
import styles from "./Videos.module.css";

export const VideoDetail = () => {
  const { id } = useParams();
  const index = Number(id);

  // index geçersizse veya aralık dışındaysa
  if (Number.isNaN(index) || index < 0 || index >= videos.length) {
    return (
      <div className={styles.detailWrapper}>
        <h2>Video not found</h2>
      </div>
    );
  }

  const video = videos[index];

  return (
    <div className={styles.detailWrapper}>

      <h1>{video.name}</h1>

      <div className={styles.detailLayout}>
        <div className={styles.detailVideoWrapper}>
          <iframe
            className={styles.detailVideo}
            src={`https://www.youtube.com/embed/${video.video}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.detailText}>
          <p className={styles.detailDescription}>{video.description}</p>
        </div>
      </div>
    </div>
  );
};
