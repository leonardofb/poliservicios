import React from 'react';

const ContactDetails = () => {
    return (
        <div className="contact-view my-5 py-lg-5">
            <div className="col-lg-6 cont-details">
                <h6 className="title-subhny"><span>Find Us</span></h6>
                <h3 className="title-w3l mb-5">London <span className="span-bold"> Office</span></h3>
                <div className="cont-top">
                    <div className="cont-left text-center"><span className="fas fa-phone-alt"></span></div>
                    <div className="cont-right">
                        <h5>Phone number</h5>
                        <p><a href="tel:+(21) 255 088 4943">+(21) 255 088 4943</a></p>
                    </div>
                </div>
                <div className="cont-top margin-up">
                    <div className="cont-left text-center"><span className="fas fa-envelope-open-text"></span></div>
                    <div className="cont-right">
                        <h5>Send Email</h5>
                        <p><a href="mailto:Poliservicios2022@mail.com" className="mail">Poliservicios2022@mail.com</a></p>
                   
</div>
</div>
<div className="cont-top margin-up">
    <div className="cont-left text-center"><span className="fas fa-map-marker-alt"></span></div>
    <div className="cont-right">
        <h5>Office Address</h5>
        <p className="pr-lg-5">Address here, 434 Food Honey street,<br /> London, UK - 62617.</p>
    </div>
</div>
</div>
<div className="col-lg-6 cont-details mt-lg-0 mt-5">
<h6 className="title-subhny"><span>Find Us</span></h6>
<h3 className="title-w3l mb-5">New York <span className="span-bold"> Office</span></h3>
<div className="cont-top">
    <div className="cont-left text-center"><span className="fas fa-phone-alt"></span></div>
    <div className="cont-right">
        <h5>Phone number</h5>
        <p><a href="tel:+(21) 255 088 4943">+(21) 255 088 4943</a></p>
    </div>
</div>
<div className="cont-top margin-up">
    <div className="cont-left text-center"><span className="fas fa-envelope-open-text"></span></div>
    <div className="cont-right">
        <h5>Send Email</h5>
        <p><a href="mailto:Poliservicios2022@mail.com" className="mail">Poliservicios2022@mail.com</a></p>
    </div>
</div>
<div className="cont-top margin-up">
    <div className="cont-left text-center"><span className="fas fa-map-marker-alt"></span></div>
    <div className="cont-right">
        <h5>Office Address</h5>
        <p className="pr-lg-5">Address here, 434 Food Honey street,<br /> New York, NY - 10001.</p>
    </div>
</div>
</div>
</div>
);
};

export default ContactDetails;