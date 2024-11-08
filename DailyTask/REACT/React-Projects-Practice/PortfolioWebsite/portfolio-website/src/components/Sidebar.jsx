import React, { useState } from 'react';
import './Sidebar.css';
import profileImage from '/images/profileImgone.jpg';
import home from '/images/home.svg';
import project from '/images/projects.svg';
import about from '/images/about.svg';
import contact from '/images/contacts.svg';

import LinkedInImage from '/images/linkedin.png';
import InstagramImage from '/images/instagram.png';
import FacebookImage from '/images/facebook.png';
import WhatsappImage from '/images/whatsapp.png';

const Sidebar = () => {
    const [active, setActive] = useState('#home');
    return (
        <div className='sidesection'>
            <div className="profile">
                <img src={profileImage} alt="profileImage" />
            </div>
            <nav>
                <ul>
                    <li className={active === '#home' ? 'active' : ''}>
                        <img src={home} alt="home" />
                        <a href="#home" onClick={() => setActive('#home')}>Home</a>
                    </li>
                    <li className={active === '#projects' ? 'active' : ''}>
                        <img src={project} alt="projects" />
                        <a href="#projects" onClick={() => setActive('#projects')}>Projects</a>
                    </li>
                    <li className={active === '#certifications' ? 'active' : ''}>
                        <img src={about} alt="certifications" />
                        <a href="#certifications" onClick={() => setActive('#certifications')}>Certifications</a>
                    </li>
                    <li className={active === '#about' ? 'active' : ''}>
                        <img src={about} alt="about" />
                        <a href="#about" onClick={() => setActive('#about')}>About Me</a>
                    </li>
                    <li className={active === '#contacts' ? 'active' : ''}>
                        <img src={contact} alt="contact" />
                        <a href="#contacts" onClick={() => setActive('#contacts')}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="social-media">
                <a href="https://www.linkedin.com"><img src={LinkedInImage} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com"><img src={InstagramImage} alt="Instagram" /></a>
                <a href="https://www.facebook.com"><img src={FacebookImage} alt="Facebook" /></a>
                <a href="https://api.whatsapp.com/send?phone=+919687020899"><img src={WhatsappImage} alt="WhatsApp" /></a>
            </div>
        </div>
    )
}

export default Sidebar;
