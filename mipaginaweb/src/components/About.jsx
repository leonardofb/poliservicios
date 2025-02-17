import React from "react";

function About() {
  return (
    <section id="about" className="w3l-index2">
      <div className="container py-md-5">
        <div className="row">
          <div className="col-lg-6">
            <img src="assets/images/ab1.jpg" alt="About Us" className="radius-image img-fluid" />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h3>Helping businesses become what they <span>can be</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
