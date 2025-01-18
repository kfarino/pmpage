import React from 'react';
import './TopFold.css';
import Kevin from '../assets/images/Kevin.png';
import Biglogo from '../assets/images/logo512.png';

const TopFold = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="title">
              I<span className="highlight">'</span>m<br />
              KEVIN FARINO<span className="highlight">.</span>
            </h1>
            <p className="value-prop">
              <span className="dash">MIT Educated, Silicon Valley Tested.</span> 
            </p>
            <a 
              href="https://calendar.app.google/ph26brtsXBXvZwLZ7" 
              className="cta-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
            <p className="description">
              PRODUCT LAUNCH AND GROWTH EXPERTISE FOR STARTUPS AND SCALEUPS. 
            </p>
          </div>
          <div className="header-image">
            <img src={Kevin || "/placeholder.svg"} alt="Kevin Farino" className="profile-image" />
            <div className="image-backdrop"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopFold;
