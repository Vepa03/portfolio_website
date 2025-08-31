import React from 'react';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.Hero}>
        <img className={styles.image} src='./surat.webp'/>
        <div className={styles.HeroMenuItems}>
            <h3>Hello, I'm</h3>
            <h1>Vepa</h1>
            <h2>Flutter Developer</h2>
            <div className={styles.buttons}>
                <a href='https://drive.google.com/file/d/13xpCtkIYZNotzKH8BTKiFswDbfCtDMd_/view?usp=sharing' target="_blank" rel="noopener noreferrer" className={styles.button1} download >Download Cv</a>
                <a href='#contact' className={styles.button2}>Contact Me</a>
            </div>
            <div className={styles.platforms}>
                <a href='https://www.linkedin.com/in/vepa-babayev-273b22330/' target="_blank" rel="noopener noreferrer">
                    <img src='./linkedin.png' alt='Linkedin'/>
                </a>
                <a href='https://github.com/Vepa03' target="_blank" rel="noopener noreferrer">
                    <img src='./github.png' alt='GitHub'/>
                </a>
                <a href='https://www.upwork.com/freelancers/~01b307b698a6f5f3a5' target="_blank" rel="noopener noreferrer">
                    <img src='./upwork.png' alt='UpWork'/>
                </a>
                <a href='https://x.com/vepaskaa' target="_blank" rel="noopener noreferrer">
                    <img src='./twitter.png' alt='Twitter'/>
                </a>
                <a href='https://www.instagram.com/vepa03_/' target="_blank" rel="noopener noreferrer">
                    <img src='./instagram.png' alt='Instagram'/>
                </a>
                <a href='https://www.youtube.com/@vepa_babayev' target="_blank" rel="noopener noreferrer">
                    <img src='./youtube.png' alt='YouTube'/>
                </a>
                <a href='https://www.tiktok.com/@vepababayev03' target="_blank" rel="noopener noreferrer">
                    <img src='./tiktok.png' alt='TikTok'/>
                </a>
            </div>
        </div>
    </div>
  )
}
