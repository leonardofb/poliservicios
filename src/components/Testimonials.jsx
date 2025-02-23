import React from 'react';
import styles from './Testimonials.module.css';

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

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.testimonialsContainer}>
                <div className="heading text-center mx-auto">
                    <h6 className="title-subhny mb-2"><span>Testimonials</span></h6>
                    <h3 className="title-w3l mb-5">Happy Clients <span className="span-bold">& Feedbacks</span></h3>
                </div>
                <div className={styles.testimonialWidth}>
                    <div className="row">
                        {testimonials.map((testimonial, index) => (
                            <div className="col-lg-6 item" key={index}>
                                <div className={styles.testimonialContent}>
                                    <div className={styles.testimonial}>
                                        <blockquote>
                                            <i className="fas fa-quote-left"></i>
                                            <q>{testimonial.quote}</q>
                                        </blockquote>
                                        <div className={styles.testiDes}>
                                            <div className={styles.testImg}>
                                                <img src={testimonial.img} className="img-fluid" alt="client-img" />
                                            </div>
                                            <div className={styles.peopl}>
                                                <h3>{testimonial.name}</h3>
                                                <p className={styles.identity}>{testimonial.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


