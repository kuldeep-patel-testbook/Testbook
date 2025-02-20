import React from 'react';
import Slider from 'react-slick';
import './About.css';
import MyResume from '../assets/resume/KuldeepCV2025.pdf';
// At the top of your `About.js` or any component using the carousel, import the CSS directly
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const About = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of visible slides
    slidesToScroll: 1, // Slides to scroll per action
    autoplay: true, // Auto scroll
    autoplaySpeed: 3000, // Auto scroll speed
    responsive: [
      {
        breakpoint: 1024, // For medium devices
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600, // For small devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For extra small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Images for Skills Sections
  const Skills = [
    {
        id: 1,
        title: "Magento",
        image: "images/tech-icons/magento.svg",
    },
    {
        id: 2,
        title: "JavaScript",
        image: "images/tech-icons/javascript.svg",
    },
    {
        id: 3,
        title: "React",
        image: "images/tech-icons/reactJS.svg",
    },
    {
        id: 4,
        title: "Redux",
        image: "images/tech-icons/redux.svg",
    },
    {
        id: 5,
        title: "Tailwind CSS",
        image: "images/tech-icons/tailwindcss.svg",
    },
    {
        id: 6,
        title: "Node.js",
        image: "images/tech-icons/nodeJS.svg",
    },
    {
        id: 7,
        title: "MongoDB",
        image: "images/tech-icons/mongodb.svg",
    },
    {
        id: 8,
        title: "GitHub",
        image: "images/tech-icons/github.svg",
    },
    {
      id: 9,
      title: "Express.js",
      image: "images/tech-icons/expressJS.svg",
    },
    {
      id: 10,
      title: "Jquery",
      image: "images/tech-icons/jquery.svg",
    },
    {
      id: 11,
      title: "MySQL",
      image: "images/tech-icons/mysql.svg",
    },
    {
      id: 12,
      title: "Docker",
      image: "images/tech-icons/docker.svg",
    }
];

  return (
    <>
      <section id="about" className="about-section">
        <div className="about-content">
          <h2>About Me ✨</h2>
            <div className="about-actions">
            <a href="https://www.linkedin.com/in/kuldeep-patel-36a13a7b/" type='application/pdf' target="_blank" rel="noopener noreferrer" className="btn-linkedin">Discover my journey on LinkedIn</a>
            <a href={MyResume} download className="btn-cv">Download CV</a>
          </div>

          <p>
            I am Kuldeep Patel, a highly experienced Full-Stack Developer with expertise in a wide range of modern web technologies and frameworks. My primary focus is on developing robust, scalable, and user-friendly web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js), alongside industry-standard tools such as Magento2, PHP, JavaScript, MySQL, HTML, and CSS.
          </p>

          <p>
            With over 3+ years of hands-on experience in Magento2, I have honed my skills in eCommerce platform development, including customization, performance optimization, migrations, API development, and integrating complex functionalities such as payment gateways, shipping methods, and cron jobs.
          </p>

          <p>
            I am also proficient in the entire MERN stack, building full-fledged web applications from scratch using React for responsive UIs and Node.js, Express.js for backend logic. MongoDB enables me to manage NoSQL databases efficiently.
          </p>

          <p>
            I am a firm believer in clean, maintainable code and agile methodologies, which enable me to deliver high-quality software solutions. My coding philosophy revolves around balancing efficiency and innovation, ensuring that each solution is both performant and scalable. I constantly stay updated with the latest trends in the development world to ensure the tools and approaches I use are cutting-edge.
          </p>

          <p>
            In addition to my technical abilities, I am passionate about collaborating with cross-functional teams to bring ideas to life. My experience working with clients from various industries has sharpened my communication skills, helping me translate complex requirements into simple, workable solutions. I thrive in dynamic environments where I can continuously learn and grow while solving real-world problems.
          </p>

          <h4>Key Technologies & Expertise:</h4>
          <ul>
            <li><strong>Magento2:</strong> Custom development, API integrations, performance optimization, migrations.</li>
            <li><strong>MERN Stack:</strong> MongoDB, Express.js, React.js, Node.js for full-stack applications.</li>
            <li><strong>JavaScript (ES6+):</strong> Proficient in frontend/backend (Node.js) development.</li>
            <li><strong>PHP & MySQL:</strong> Strong server-side programming and database management.</li>
            <li><strong>HTML5 & CSS3:</strong> Responsive and accessible design, cross-browser compatibility.</li>
            <li><strong>RESTful APIs & GraphQL:</strong> Backend services integration, data exchange.</li>
          </ul>

        </div>

        <div className="skills-section">
          <h4>Web Development Skills</h4>
          <Slider {...settings}>
            {
              Skills && Skills.map(data => (
                <div className="carousel-item" key={data.id}>
                  <img src={data.image} alt={data.title} title={data.title} />
                </div>
              ))
            }
          </Slider>
        </div>
      </section>
    </>
  );
}

export default About;
