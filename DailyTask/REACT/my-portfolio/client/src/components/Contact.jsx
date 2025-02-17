import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const baseUrl = 'http://localhost:5000';

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        //console.log(formData.name);
        try {
            const response = await axios.post(`${baseUrl}/send-email`, formData);
            setResponseMessage(response.data.message);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setResponseMessage('Failed to send email. Please try again later.');
        }
    };
    
    return (
        <>
            <section className="contact" id="contact">
                <h2>Contact Me</h2>
                <div className="contact-main-section">

                    <div className="contact-inner-section form-section">
                        {responseMessage && <p style={{color:'red',fontWeight:'bold'}}>{responseMessage}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea name="message" id="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
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
