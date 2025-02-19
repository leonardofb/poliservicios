// src/components/ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
    return (
        <section className="w3l-services2" id="services">
            <div id="cwp23-block" className="py-5">
                <div className="container py-lg-5">
                    <div className="row cwp23-content mt-lg-5 mt-4">
                        <div className="col-lg-6 cwp23-img">
                            <h6 className="title-subhny mb-2"><span>What We Do?</span></h6>
                            <h3 className="title-w3l mb-4">The service we offer is specifically designed to meet <br />
                                <span className="span-bold">your needs.</span>
                            </h3>
                            <p className="mt-4">Sed in metus libero. Sed volutpat eget dui ut tempus...</p>
                            <div className="w3l-button mt-lg-5 mt-4">
                                <a href="services.html" className="btn btn-style btn-primary mt-2">Read More <span className="fas fa-angle-double-right ms-2"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 cwp23-text mt-lg-0 mt-5 ps-lg-5">
                            <div className="cwp23-text-cols">
                                {['g2.jpg', 'g3.jpg', 'g4.jpg', 'g5.jpg'].map((img, index) => (
                                    <div className="column" key={index}>
                                        <a href="#"><img src={`assets/images/${img}`} alt="" className="radius-image img-fluid" /></a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;