import React from 'react';
import Header from './components/Header3';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';
import About from './components/About'; // O AboutSection
import Services from './components/Services'; // O ServicesSection
import Features from './components/Features'; // Importa el nuevo componente
import Testimonials from './components/Testimonials'; // O TestimonialsSection
import VideoSection from './components/VideoSection'; // Si es relevante
import Grids3 from './components/Grids3'; // Si es relevante
import Footer from './components/Footer';
import './App.css'; // Asegúrate de importar tus estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import TestimonialsSection from './components/TestimonialsSection';

const App = () => {
    return (
        <div>
            
            <Header />
            <MainSlider />
            <Grids3 />
            <Navbar />
            <About />       
            <VideoSection />
            <Services />
            <Testimonials />
            <TestimonialsSection />
            <Features />         
            <Footer />
        </div>
    );
};

export default App;