import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
//import Navbar from './components/Navbar'; // Asegúrate de que la ruta sea correcta
import About from './components/About'; // O AboutSection
import Services from './components/Services'; // O ServicesSection
import Footer from './components/Footer';
import Contact from './components/Contact';
import Home from './components/Home'; // Asegúrate de importar el nuevo componente Home
import './App.css'; // Asegúrate de importar tus estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Banner from "./components/Banner";


const App = () => {
    return (
        <Router basename="/poliservicios"> 
            <div>
                <Header />
                 <Routes>
                    <Route path="/" element={<Home />} /> {/* Componente Home */}
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
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