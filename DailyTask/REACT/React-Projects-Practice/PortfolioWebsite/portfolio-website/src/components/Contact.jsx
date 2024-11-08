import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <h2>Contact Me</h2>
                <div className="contact-main-section">

                    <div className="contact-inner-section form-section">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id='name' name='name' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id='email' name='email' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" rows="5" required></textarea>
                            </div>
                            <button type='submit'>Send</button>
                        </form>
                    </div>

                    <div className="contact-inner-section info-section">
                        <p>Feel free to reach out for any inquiries or collaborations. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                        <p><strong>Email:</strong> kuldeep3063@gmail.com</p>
                        <p><strong>Phone:</strong> (+91) 9898719097</p>
                        <p><strong>Address:</strong> 3-8-89 Gujarwado, Patan, Gujarat, 384265</p>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Contact;
