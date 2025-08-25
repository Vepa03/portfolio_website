import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom';  
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Babayev</a>
        <div className={styles.menu}>
            <img className={styles.menuButton} 
                src={
                    menuOpen
                        ?('./close.png')
                        :('./menu.png')} 
                alt='menu button'
                onClick={()=> setMenuOpen(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
                <li>
                    <Link to="/about" > About </Link>
                </li>
                <li>
                    <Link to="/experience" > Experience </Link>
                </li>
                <li>
                    <Link to="/projects" > Projects </Link>
                </li>
                <li>
                    <Link to="/videos" > Videos </Link>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
