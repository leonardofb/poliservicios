import React from 'react';
import RequestConsultation from './RequestConsultation'; // Asegúrate de que la ruta sea correcta
const Services = () => {
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
                            <p className="mt-4">Sed in metus libero. Sed volutpat eget dui ut tempus. Fusce fringilla tincidunt laoreet
                                Morbi ac metus vitae diam scelerisque malesuada eget eu mauris. Cras varius lorem ac velit pharetra.
                            </p>
                            <div className="w3l-button mt-lg-5 mt-4">
                                <a href="services.html" className="btn btn-primary btn-style mt-2">Read More <span className="fas fa-angle-double-right ms-2"></span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 cwp23-text mt-lg-0 mt-5 ps-lg-5">
                            <div className="cwp23-text-cols">
                                <div className="column">
                                    <a href="#"><img src="assets/images/g2.jpg" alt="" className="radius-image img-fluid" /></a>
                                </div>
                                <div className="column">
                                    <a href="#"><img src="assets/images/g3.jpg" alt="" className="radius-image img-fluid" /></a>
                                </div>
                                <div className="column">
                                    <a href="#"><img src="assets/images/g4.jpg" alt="" className="radius-image img-fluid" /></a>
                                </div>
                                <div className="column">
                                    <a href="#"><img src="assets/images/g5.jpg" alt="" className="radius-image img-fluid" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RequestConsultation />
        </section>
    );
};

export default Services;
