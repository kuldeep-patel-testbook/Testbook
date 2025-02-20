import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slideOne from '/src/assets/images/nbf_home.png';
import slideOne1 from '/src/assets/images/nbf_logo_1.svg';
import slideTwo from '/src/assets/images/surplusfurniture_home.png';
import slideTwo1 from '/src/assets/images/surplusfurniture_logo.png';
import slideThree from '/src/assets/images/eureka_home.png';
import slideThree1 from '/src/assets/images/eureka_logo.svg';
import slideFour from '/src/assets/images/funexpress_home.png';
import slideFour1 from '/src/assets/images/funexpress_logo.png';
import slideFive from '/src/assets/images/teensunite_home.png';
import slideFive1 from '/src/assets/images/teensunite_logo.png';
import slideSix from '/src/assets/images/plumpersonnel_home.png';
import slideSix1 from '/src/assets/images/plumpersonnel_logo.png';

const projects = [
    { name: 'NBF Central', img: slideOne, logo: slideOne1, link: 'https://www.centralrestaurant.com/' },
    { name: 'Surplus Furniture', img: slideTwo, logo: slideTwo1, link: 'https://www.surplusfurniture.com/' },
    { name: 'Eureka Forbes', img: slideThree, logo: slideThree1, link: 'https://www.eurekaforbes.com/' },
    { name: 'FunExpress', img: slideFour, logo: slideFour1, link: 'https://www.funexpress.com/' },
    { name: 'Teens Unite', img: slideFive, logo: slideFive1, link: 'https://www.teensunite.org/' },
    { name: 'Plum Personnel', img: slideSix, logo: slideSix1, link: 'https://www.plum-personnel.co.uk/' }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My projects ✨</h2>

            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="project-carousel"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="project item">
                            <h3>{project.name}</h3>
                            <div className="image">
                                <img className='img1' src={project.img} alt={project.name} />
                                <img className='img2' src={project.logo} alt={project.name} />
                            </div>
                            <div className='link-description'>
                                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                    Link to the platform
                                </a>
                                <p>Web developing / Presentation</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Projects;
