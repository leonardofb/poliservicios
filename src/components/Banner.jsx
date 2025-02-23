import React from "react";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h3>
          Bienvenido a <span>PoliServicios</span>
        </h3>
        <p>Soluciones tecnológicas para tu negocio</p>
        <button className={styles.readMore}>Conócenos</button>
      </div>
    </section>
  );
};

export default Banner;
