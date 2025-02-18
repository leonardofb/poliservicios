import React from 'react';
import Header from './components/Header';
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
        </div>
    );
};

export default App;
