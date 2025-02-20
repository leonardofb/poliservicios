import React from 'react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import Map from './Map';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
           <section className="w3l-contact-1 py-5" id="contact">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="header-title text-center">
                            <h6 className="title-subhny"><span>Contact Us</span></h6>
                            <h3 className="title-w3l mb-2">Let’s Talk About
                                <span className="span-bold"> Your Project</span>
                            </h3>
                            <p className="mb-sm-5 mb-4">Start working with us that can provide everything you need to generate awareness,
                                drive traffic, connect. <br /> We guarantee that you’ll be able to have any issue resolved within 24 hours.
                            </p>
                        </div>
                        <ContactForm /> {/* Componente del formulario de contacto */}
                        <ContactDetails /> {/* Componente con los detalles de contacto */}
                        <Map /> {/* Componente del mapa */}
                    </div>
                </div>
            </section>
            <Footer /> {/* Componente del pie de página */}
        </div>
    );
};

export default Contact;