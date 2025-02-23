import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.logo}>Poliservicios</h1>
        <nav className={styles.navbar}>
          <NavLink to="/" exact className={styles.navLink} activeClassName={styles.active}>
            Home
          </NavLink>
          <NavLink to="/about" className={styles.navLink} activeClassName={styles.active}>
            About
          </NavLink>
          <NavLink to="/services" className={styles.navLink} activeClassName={styles.active}>
            Services
          </NavLink>
          <NavLink to="/contact" className={styles.navLink} activeClassName={styles.active}>
            Contact
          </NavLink>
          <button className={styles.darkModeButton}>Modo Oscuro</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;