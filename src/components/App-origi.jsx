import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import MainSlider from './MainSlider';
import About from './About';
import Services from './Services';
import Features from './Features';
import Testimonials from './Testimonials';
import VideoSection from './VideoSection';
import Grids3 from './Grids3';
import Footer from './Footer';
import Contact from './Contact';
import Home from './Home'; // Asegúrate de importar el nuevo componente Home
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Header />
                <MainSlider />
                <Grids3 />
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Componente Home */}
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <VideoSection />
                <Testimonials />
                <Features />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
/*

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import About from './components/About'; // O AboutSection
import Services from './components/Services'; // O ServicesSection
import Features from './components/Features'; // Importa el nuevo componente
import Testimonials from './components/Testimonials'; // O TestimonialsSection
import VideoSection from './components/VideoSection'; // Si es relevante
import Grids3 from './components/Grids3'; // Si es relevante
import Footer from './components/Footer';
import Contact from './components/Contact';
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
*/