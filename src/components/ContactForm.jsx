import React from 'react';

const ContactForm = () => {
    return (
        <form action="https://sendmail.w3layouts.com/submitForm" method="post">
            <div className="twice-two">
                <input type="text" className="form-control" name="w3lName" placeholder="Name" required />
                <input type="email" className="form-control" name="w3lSender" placeholder="Email" required />
            </div>
            <div className="twice-two">
                <input type="text" className="form-control" name="w3lPhone" placeholder="Phone" required />
                <input type="text" className="form-control" name="w3lSubject" placeholder="Subject" required />
            </div>
            <textarea name="w3lMessage" className="form-control" placeholder="Message" required></textarea>
            <div className="text-lg-center">
                <button type="submit" className="btn btn-primary btn-style mt-lg-5 mt-4">Send Message</button>
            </div>
        </form>
    );
};

export default ContactForm;