import React from 'react';
import RequestConsultation from './RequestConsultation';
import styles from './Services.module.scss'; // Importa el módulo SCSS

const Services = () => {
    return (
        <section className={styles.servicesSection} id="services">
            <div className={styles.servicesContainer}>
                <div className="row cwp23-content mt-lg-5 mt-4">
                    <div className="col-lg-6">
                        <h6 className={styles.subtitle}><span>¿Qué hacemos?</span></h6>
                        <h3 className={styles.title}>The service we offer is specifically designed to meet <br />
                            <span className={styles.boldText}>your needs.</span>
                        </h3>
                        <p className={styles.description}>
                            Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt laoreet
                            Morbi ac metus vitae diam scelerisque malesuada eget eu mauris. Cras varius lorem ac velit pharetra.
                        </p>
                        <div className={styles.buttonContainer}>
                            <a href="services.html" className="btn btn-primary btn-style mt-2">Leer Más <span className="fas fa-angle-double-right ms-2"></span></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.imageGrid}>
                            <div className={styles.column}>
                                <a href="#"><img src="assets/images/g2.jpg" alt="" /></a>
                            </div>
                            <div className={styles.column}>
                                <a href="#"><img src="assets/images/g3.jpg" alt="" /></a>
                            </div>
                            <div className={styles.column}>
                                <a href="#"><img src="assets/images/g4.jpg" alt="" /></a>
                            </div>
                            <div className={styles.column}>
                                <a href="#"><img src="assets/images/g5.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RequestConsultation />
        </section>
    );
};

export default Services;
