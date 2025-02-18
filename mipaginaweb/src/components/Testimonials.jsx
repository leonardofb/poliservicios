import React from 'react';

const Testimonials = () => {
    return (
        <section className="w3l-clients pb-5" id="clients">
            <div className="cusrtomer-layout py-5 pb-0">
                <div className="container py-lg-4 py-md-3 ">
                    <div className="heading text-center mx-auto">
                        <h6 className="title-subhny mb-2"><span>Testimonials</span></h6>
                        <h3 className="title-w3l mb-5">Happy Clients
                            <span className="span-bold">& Feedbacks</span>
                        </h3>
                    </div>
                    <div className="testimonial-width">
                        <div className="row">
                            <div className="col-lg-6 item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q><i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                Dolores molestias adipisci dolor sit amet!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team1.jpg" className="img-fluid" alt="client-img" /></div>
                                            <div className="peopl align-self">
                                                <h3>John Wilson</h3>
                                                <p className="indentity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 item">
                                <div className="testimonial-content">
                                    <div className="testimonial">
                                        <blockquote>
                                            <q><i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
                                                laudantium
                                                voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                Dolores molestias adipisci dolor                                                 dolor sit amet!.</q>
                                        </blockquote>
                                        <div className="testi-des">
                                            <div className="test-img"><img src="assets/images/team2.jpg" className="img-fluid" alt="client-img" /></div>
                                            <div className="peopl align-self">
                                                <h3>Julia Sakura</h3>
                                                <p className="indentity">Example City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
