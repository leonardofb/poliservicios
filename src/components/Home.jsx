// src/components/Home.jsx
import React from 'react';
import MainSlider from './MainSlider';
import Grids3 from './Grids3';
import About from './About';
import VideoSection from './VideoSection';
import Services from './Services';
import Testimonials from './Testimonials';
import TestimonialsSection from './TestimonialsSection';
import Features from './Features';
import styles from './Home.module.css'; // Importamos los estilos de CSS Modules

const Home = () => {
    return (
        <div className={styles.home}> {/* Se aplica el estilo desde CSS Modules */}
            <div className={styles.container}>
                <MainSlider />
                <Grids3 />
                <About />
                <VideoSection />
                <Services />
                <Testimonials />
                <TestimonialsSection />
                <Features />
            </div>
        </div>
    );
};

export default Home;
