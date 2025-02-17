import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
