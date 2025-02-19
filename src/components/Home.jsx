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

const Home = () => {
    return (
        <div className="container"> {/* Asegúrate de que haya un contenedor adecuado */}
            <MainSlider />
            <Grids3 />
            <About />
            <VideoSection />
            <Services />
            <Testimonials />
            <TestimonialsSection />
            <Features />
        </div>
    );
};

export default Home;