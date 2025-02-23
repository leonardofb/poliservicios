import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    // Detectar scroll para cambiar el estado del header
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Aplicar el modo oscuro o claro según el estado
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
          <h1>
            <Link className={`navbar-brand ${styles.brand}`} to="/">
              Poli<span className={styles.red}>Servicios</span>
            </Link>
          </h1>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className={`navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll ${styles.navbarNav}`}>
              <li className={styles.navItem}><Link className="nav-link" to="/">Home</Link></li>
              <li className={styles.navItem}><Link className="nav-link" to="/about">About</Link></li>
              <li className={styles.navItem}><Link className="nav-link" to="/services">Services</Link></li>
              <li className={styles.navItem}><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>

            {/* Toggle Switch para cambio de tema */}
            <div className="theme-switch-wrapper">
              <label className="theme-switch">
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider round"></span>
              </label>
              <em>{darkMode ? "Modo Oscuro" : "Modo Claro"}</em>
            </div>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;






/*import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header id="site-header" className={`fixed-top ${styles.header}`}>
      <div className={styles.container}>
        <nav className={`navbar navbar-expand-lg navbar-light stroke py-lg-0 ${styles.navbar}`}>
          <h1>
            <Link className={`navbar-brand ${styles.brand}`} to="/">
              Poli<span className={styles.sublog}>Servicios</span>
            </Link>
          </h1>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className={`navbar-nav me-lg-auto my-2 my-lg-0 navbar-nav-scroll ${styles.navbarNav}`}>
              <li className={styles.navItem}>
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav search-right mt-lg-0 mt-2">
              <li className="nav-item mr-2" title="Search">
                <a href="#search" className={styles.search}>
                  <span className="fas fa-search" aria-hidden="true"></span>
                </a>
              </li>
              <li className="nav-item mx-lg-4">
                <a href="#" className={`phone-btn btn-white d-none d-lg-block btn-style ms-2 ${styles.phoneBtn}`}>
                  <span className="fas fa-user me-2" aria-hidden="true"></span> User Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
*/