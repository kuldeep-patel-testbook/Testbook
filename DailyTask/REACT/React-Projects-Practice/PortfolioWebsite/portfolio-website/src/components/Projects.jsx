import React from 'react'
import './Projects.css';
import Carousel from 'better-react-carousel';

import slideOne from '/images/Byka1.png';
import slideOne1 from '/images/Byka2.png';
import slideTwo from '/images/Noje1.png';
import slideTwo1 from '/images/Noje2.png';
import slideThree from '/images/Champ1.png';
import slideThree1 from '/images/Champ2.png';
import slideFour from '/images/Zeq1.png';
import slideFour1 from '/images/Zeq2.png';
import slideFive from '/images/Ici1.png';
import slideFive1 from '/images/Ici2.png';
import slideSix from '/images/pe.png';
import slideSix1 from '/images/pe2.png';

const Projects = () => {
    return (
        <>
            <section id="projects" className="projects">
                <h2>My projects ✨</h2>

                <Carousel cols={2} rows={1} gap={10} loop autoplay={3000} containerClass="carousel-container" itemClass="carousel-item" transition={0.5}>
                    <Carousel.Item>
                        <div className="project item slideone" >
                            <h3>NBF Central</h3>
                            <div className="image">
                                <img className='img1' src={slideOne} alt="central-restaurant" />
                                <img className='img2' src={slideOne1} alt="central-restaurant" />
                            </div>
                            <div className='link-description'>
                                <a className="project-link" href="https://www.centralrestaurant.com/">Link to the platform</a>
                                <p>Web developing / Presentation</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="project item slidetwo">
                            <h3>Surplus Furniture</h3>
                            <div className="image">
                                <img className='img1' src={slideTwo} alt="surplus-furniture" />
                                <img className='img2' src={slideTwo1} alt="surplus-furniture" />
                            </div>

                            <div className='link-description'>
                                <a className="project-link" href="https://www.surplusfurniture.com/">Link to the platform</a>
                                <p>Web developing / Presentation</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="project item slidethree">
                            <h3>Eureka Forbes</h3>
                            <div className="image">
                                <img className='img1' src={slideThree} alt="eureka-forbes" />
                                <img className='img2' src={slideThree1} alt="eureka-forbes" />
                            </div>

                            <div className='link-description'>
                                <a className="project-link" href="https://www.eurekaforbes.com/">Link to the platform</a>
                                <p>Web developing / Presentation</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="project item slidefour">
                            <h3>FunExpress</h3>
                            <div className="image">
                                <img className='img1' src={slideFour} alt="fun-express" />
                                <img className='img2' src={slideFour1} alt="fun-express" />
                            </div>

                            <div className='link-description'>
                                <a className="project-link" href="https://www.funexpress.com/">Link to the platform</a>
                                <p>Web developing / Presentation</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="project item slidefive">
                            <h3>Teens Unite</h3>
                            <div className="image">
                                <img className='img1' src={slideFive} alt="teens-unite" />
                                <img className='img2' src={slideFive1} alt="teens-unite" />
                            </div>

                            <div className='link-description'>
                                <a className="project-link" href="https://www.teensunite.org/">Link to the platform</a>
                                <p>Web developing / Presentation</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="project item slidesix">
                            <h3>Plum Personnel</h3>
                            <div className="image">
                                <img className='img1' src={slideSix} alt="plum-personnel" />
                                <img className='img2' src={slideSix1} alt="plum-personnel" />
                            </div>

                            <div className='link-description'>
                                <a className="project-link" href="https://www.plum-personnel.co.uk/">Link to the platform</a>
                                <p>Web developing / Presentation</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </section>
        </>
    )
}

export default Projects