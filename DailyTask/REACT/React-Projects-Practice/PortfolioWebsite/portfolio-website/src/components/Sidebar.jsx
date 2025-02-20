import React, { useState } from 'react';
import './Sidebar.css';
import profileImage from '/src/assets/images/profileImgone.png';
import home from '/src/assets/images/home-icon.svg';
import project from '/src/assets/images/projects.svg';
import certificate from '/src/assets/images/certificatesvg.svg';
import about from '/src/assets/images/about.svg';
import contact from '/src/assets/images/contacts.svg';

import LinkedInImage from '/src/assets/images/linkedin.png';
import InstagramImage from '/src/assets/images/instagram.png';
import FacebookImage from '/src/assets/images/facebook.png';
import WhatsappImage from '/src/assets/images/whatsapp.png';

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
                        <img src={certificate} alt="certifications" />
                        <a href="#certifications" onClick={() => setActive('#certifications')}>Certifications</a>
                    </li>
                    <li className={active === '#about' ? 'active' : ''}>
                        <img src={about} alt="about" />
                        <a href="#about" onClick={() => setActive('#about')}>About Me</a>
                    </li>
                    <li className={active === '#contact' ? 'active' : ''}>
                        <img src={contact} alt="contact" />
                        <a href="#contact" onClick={() => setActive('#contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/kuldeep-patel-36a13a7b/" target="_blank" rel="noopener noreferrer"><img src={LinkedInImage} alt="LinkedIn" /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={InstagramImage} alt="Instagram" /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src={FacebookImage} alt="Facebook" /></a>
                <a href="https://wa.me/919898719097" target="_blank" rel="noopener noreferrer"><img src={WhatsappImage} alt="WhatsApp" /></a>
            </div>
        </div>
    )
}

export default Sidebar;
