import React, { useState } from 'react'
import './Acheivements.css';

const Acheivements = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    // Data for certifications
    const certifications = [
        {
            id: 1,
            title: "Magento Developer",
            image: "/images/certifications/Adobe-Certified-Professional.jpg",
            description: "Details about Magento Developer"
        },
        {
            id: 2,
            title: "ReactJS",
            image: "/images/certifications/Kuldeep_Patel_REACTJS_FUREF63A.png",
            description: "Details about React JS"
        },
        {
            id: 3,
            title: "NodeJS",
            image: "/images/certifications/Kuldeep_Patel_MONGO DB AND NODEJS_FUMOF63A.png",
            description: "Details about NodeJS"
        },
        {
            id: 4,
            title: "Javascript",
            image: "/images/certifications/Kuldeep_Patel_JAVASCRIPT_FUJAF63A.png",
            description: "Details about Javascript"
        },
        {
            id: 5,
            title: "HTML & CSS",
            image: "/images/certifications/Kuldeep_Patel_HTML_AND_CSS_FUHTF63A.png",
            description: "Details about HTML and CSS"
        },
        {
            id: 6,
            title: "ChatGPT",
            image: "/images/certifications/certificate-Chatgpt-1.png",
            description: "Details about ChatGPT"
        },
        {
            id: 7,
            title: "Docker",
            image: "/images/certifications/certificate-docker-1.png",
            description: "Details about Docker"
        },
        {
            id: 8,
            title: "Big Data",
            image: "/images/certifications/certificate-bigdata-1.png",
            description: "Details about Big Data"
        }
    ];

    const openModal = (item) => {
        setSelectedCert(item);
        setIsOpen(true);
    }

    const closeModal = () => {
        setSelectedCert(null);
        setIsOpen(false);
    }

    return (
        <>
            <section id='certifications' className='certifications'>
                <h2>My Certifications</h2>
                <p className="cert-description">I have earned the following certifications. Click on any image to view details.</p>
                <div className="cert-grid">
                    {
                        certifications.map(item => (
                            <div key={item.id} className="cert-item" onClick={() => openModal(item)}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        ))
                    }
                </div>

                {/* Model Logic */}
                {
                    isOpen && selectedCert && (
                        <div className='modal'>
                            <div className="modal-content">
                                <span className='close' onClick={closeModal}>&times;</span>
                                <h3>{selectedCert.title}</h3>
                                <img src={selectedCert.image} alt={selectedCert.title} />
                                <p>{selectedCert.description}</p>
                            </div>
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default Acheivements;