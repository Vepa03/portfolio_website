import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import styles from './Contact.module.css';

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_4f0euoo',    // Örn: service_123abc
      'template_3kj0u6o',   // Örn: template_xyz789
      form.current,
      '43K7eWTqNz3Gbvxom'     // Örn: user_ABCD1234
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      alert("An error occurred while sending.");
      console.error(error.text);
    });
  };

  return (
    <section id='contact' className={styles.wrapper}>
      {/* İletişim Kartı + Görsel */}
      <div className={styles.contactContainer}>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <h3>Contact Me</h3>
          <input
    type="text"
    name="name" // 👈 doğru: template'de {{name}}
    placeholder="Name"
    required
  />

  <input
    type="email"
    name="email" // 👈 doğru: template'de {{email}}
    placeholder="Mail"
    required
  />

  <input
    type="text"
    name="title" // 👈 doğru: template'de {{title}} kullanılmış
    placeholder="Subject"
    required
  />

  <textarea
    name="Message" // 👈 doğru: template'de {{message}}
    rows={5}
    placeholder="Message"
    required
  ></textarea>

  <input
    type="hidden"
    name="time" // 👈 template'de {{time}} varsa ekle
    value={new Date().toLocaleString()}
  />

  <button type="submit">Submit</button>
        </form>

        <div className={styles.imageBox}>
          <img src="/contact_me.jpg" alt="Boxes on laptop" />
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>

        <div className={styles.footerColumn}>
          <h4>Links</h4>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Contact Links</h4>
          <ul>
            <li>
              <a href='https://www.instagram.com/vepa03_/' target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/vepa-babayev-273b22330/' target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </li>
            <li>
              <a href='https://x.com/vepaskaa' target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href='https://wa.me/36707076708' target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h4>Contact Me</h4>
          <p>
            <a href="tel:+36707076708">+36707076708</a>
          </p>
          <p>
            <a href='mailto:vepababayev03@gmail.com'>vepababayev03@gmail.com</a>
          </p>
        </div>

      </footer>
    </section>
  );
};