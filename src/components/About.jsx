import React from "react";
import { Link } from "react-router-dom"; // Usamos Link en lugar de <a>
import styles from "./About.module.css"; // Importamos los estilos CSS Modules
import ab1 from "/assets/images/ab1.jpg"; // Importamos la imagen correctamente

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.middW3}>
        <div className="container py-md-5 py-3">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.imageContainer}>
                <img src={ab1} alt="Our Story" className="radius-image img-fluid" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 align-self ps-lg-5">
              <div className="title-content text-left">
                <h6 className="title-subhny mb-2">
                  <span>Our Story</span>
                </h6>
                <h3 className="title-w3l">
                  Helping business become what they <span className={styles.spanBold}>can be</span>
                </h3>
              </div>
              <p className="mt-md-4 mt-3">Texto a cambiar</p>
              <div className={styles.buttonContainer}>
                <Link to="/about" className="btn btn-style btn-primary mt-lg-5 mt-4">
                  Leer Más <span className="fas fa-angle-double-right ms-2"></span>
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-style mt-lg-5 mt-4 ms-2">
                  ¡Hablemos! <span className="fas fa-angle-double-right ms-2"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
