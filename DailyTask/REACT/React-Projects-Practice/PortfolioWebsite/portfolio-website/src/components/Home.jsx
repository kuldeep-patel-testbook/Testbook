import React, { useRef, useState } from 'react'
import './Home.css';
import downArrow from '../../public/images/down-arrow-svg.svg';
import profileImage from '../../public/images/profileImgone.jpg';

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef(null);

  const handleLearnMoreClick = () => {
    setShowMore(true);
    setTimeout(() => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
  return (
    <>
      <div className="container">
        <section id='home' className='home'>
          <div className="intro">
            <div className="icon"></div>
            <div className="lines">
              <h2><span className='homenum'>01</span> <span className="code">&lt;</span>Hello I'm <span className="highlight">Kuldeep!</span><span className="code">&gt;</span></h2>
              <p><span className='homenum'>02</span> <span className="code">&lt;</span>I <span className="highlight">develop <span className="iconc">💻 </span>
                <span className="highlight">design <span className="iconc">✏️</span></span> <span className='uniqueColor'> and </span> </span></p>
              <p><span className='homenum'>03</span><span className="code"><span className="highlight lastcontent">maintain <span className="iconc">🧑‍💻</span></span>
                <span className='uniqueColor'>websites.</span>&gt;</span></p>
            </div>

            <h4 className="description">I also design your brand image, logo...</h4>

            <p className='learn-more' onClick={handleLearnMoreClick}>
              <span>Learn more</span>
              <img src={downArrow} alt="down-arrow" />
            </p>
            {/* <button onClick={handleLearnMoreClick} className='learn-more'></button> */}
          </div>
        </section>

        {showMore && (
          <div className={`section ${showMore ? 'active' : ''}`} id="section2" ref={sectionRef}>
            <div className="icon secicon"></div>
            <div className="step">01</div>
            <div className="message">
              <p className="heading">
                First, we need an <span className="highlight">idea...</span>
              </p>
            </div>

            <div className="chatuser request">
              <div className="profile-pic">P</div>
              <div className="bubble">
                <p>
                  I need a <span className="highlight">website</span> for my <span className="highlight">company</span>, PERIOD.<br />
                  We specialize in marketing eco-friendly and gender-neutral feminine hygiene products.
                </p>
              </div>
            </div>
            <div className="chatuser response">
              <div className="bubble">
                <p>Alright, great!<br />
                  I'll handle everything, first the <span className="highlight">design</span> that I'll share with you. Once validated,<br />
                  I'll <span className="highlight">develop</span> your website and put it online!
                </p>
              </div>
              <div className="profile-pic">
                <img src={profileImage} alt="Profile" />
              </div>
            </div>

            <div className="chatuser request">
              <div className="profile-pic">P</div>
              <div className="bubble">
                <p>Perfect, when do we start :)?</p>
              </div>
            </div>
            <div className="now-button">
              <button>Now!</button>
              <img className='nowBtn' src={downArrow} alt="down-arrow" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Home