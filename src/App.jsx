import React from 'react';
import Header from './components/Header';
import Grids3 from './components/Grids3';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import MainSlider from './components/MainSlider';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import './App.css'; // Asegúrate de importar tus estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <div>
            <Header />
            <MainSlider />
            <About />
            <Services />
            <Testimonials />
            <Footer />
            <AboutSection />
            <VideoSection />
            <ServicesSection />
            <TestimonialsSection />
            <Grids3 />
        </div>
    );
};

export default App;
