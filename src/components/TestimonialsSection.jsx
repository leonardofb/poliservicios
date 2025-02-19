// src/components/TestimonialsSection.jsx
import React from 'react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "John Wilson",
            city: "Example City",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.",
            img: "assets/images/team1.jpg"
        },
        {
            name: "Julia Sakura",
            city: "Example City",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.",
            img: "assets/images/team2.jpg"
        }
    ];

    return (
        <section className="w3l-clients pb-5" id="clients">
            <div className="cusrtomer-layout py-5 pb-0">
                <div className="container py-lg-4 py-md-3">
                    <div className="heading text-center mx-auto">
                        <h6 className="title-subhny mb-2"><span>Testimonials</span></h6>
                        <h3 className="title-w3l mb-5">Happy Clients <span className="span-bold">& Feedbacks</span></h3>
                    </div>
                    <div className="testimonial-width">
                        <div className="row">
                            {testimonials.map((testimonial, index) => (
                                <div className="col-lg-6 item" key={index}>
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q><i className="fas fa-quote-left"></i> {testimonial.quote}</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img src={testimonial.img} className="img-fluid" alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>{testimonial.name}</h3>
                                                    <p className="indentity">{testimonial.city}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;