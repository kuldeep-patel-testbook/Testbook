import React, { useState } from 'react'
import './Sidebar.css';
import profileImage from '../../public/images/profileImgone.jpg';
import home from '../../public/images/home.svg';
import project from '../../public/images/projects.svg';
import about from '../../public/images/about.svg';
import contact from '../../public/images/contacts.svg';

import LinkedInImage from '../../public/images/linkedin.png';
import InstagramImage from '../../public/images/instagram.png';
import FacebookImage from '../../public/images/facebook.png';
import WhatsappImage from '../../public/images/whatsapp.png';

const Sidebar = () => {
    const [active, setActive] = useState('#home');
    return (
        <div className='sidebar'>
            <div className="vertical-line"></div>
            <div className="profile">
                <img src={profileImage} alt="profileImage" />
            </div>
            <nav>
                <ul>
                    <li className={active === '#home' ? 'active' : ''}>
                        <img className={active === '#home' ? 'active' : ''} src={home} alt="home" />
                        <a href="#home" onClick={() => setActive('#home')}>Home</a>
                    </li>
                    <li className={active === '#projects' ? 'active' : ''}>
                        <img className={active === '#projects' ? 'active' : ''} src={project} alt="projects" />
                        <a href="#projects" onClick={() => setActive('#projects')}>Projects</a>
                    </li>
                    <li className={active === '#about' ? 'active' : ''}>
                        <img className={active === '#about' ? 'active' : ''} src={about} alt="about" />
                        <a href="#about" onClick={() => setActive('#about')}>About Me</a>
                    </li>
                    <li className={active === '#skills' ? 'active' : ''}>
                        <img className={active === '#skills' ? 'active' : ''} src={about} alt="skills" />
                        <a href="#skills" onClick={() => setActive('#skills')}>Skills</a>
                    </li>
                    <li className={active === '#contact' ? 'active' : ''}>
                        <img className={active === '#contact' ? 'active' : ''} src={contact} alt="contact" />
                        <a href="#contact" onClick={() => setActive('#contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="social-icons">
                {/* <a href="https://www.linkedin.com/feed/" target='_blank'><i className='fab fa-linkedin'></i></a>
                <a href="#"><i className='fab fa-instagram'></i></a>
                <a href="#"><i className='fab fa-facebook'></i></a>
                <a href="#"><i className='fab fa-whatsapp'></i></a> */}

                <a href="https://www.linkedin.com/feed/" target='_blank'><img src={LinkedInImage} alt="linkedin" /></a>
                <a href="#" target='_blank'><img src={InstagramImage} alt="instagram" /></a>
                <a href="#" target='_blank'><img src={FacebookImage} alt="facebook" /></a>
                <a href="#" target='_blank'><img src={WhatsappImage} alt="whatsapp" /></a>
            </div>

        </div>
    )
}

export default Sidebar