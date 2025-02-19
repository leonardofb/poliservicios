// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
    return (
        <section className="fondo1" id="about">
            <div className="midd-w3 py-5">
                <div className="container py-md-5 py-3">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="w3shape position-relative">
                                <img src="assets/images/ab1.jpg" alt="" className="radius-image img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-md-5 mt-4 align-self ps-lg-5">
                            <div className="title-content text-left">
                                <h6 className="title-subhny mb-2"><span>Our Story</span></h6>
                                <h3 className="title-w3l">Helping business become what they <span className="span-bold">can be</span></h3>
                            </div>
                            <p className="mt-md-4 mt-3">Lorem ipsum viverra feugiat...</p>
                            <div className="w3l-two-buttons">
                                <a href="about.html" className="btn btn-style btn-primary mt-lg-5 mt-4">Read More <span className="fas fa-angle-double-right ms-2"></span></a>
                                <a href="#view" className="btn btn-outline-primary btn-style mt-lg-5 mt-4 ms-2"> Contact Us<span className="fas fa-angle-double-right ms-2"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;