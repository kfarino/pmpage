import React from 'react';
import './Header.css';
import Kevin from '../assets/images/Kevin.jpg';
import Biglogo from '../assets/images/logo512.png';

const Header = () => {
  return (
    <div className="header-container">
      <nav className="nav">
        <img src={Biglogo || "/placeholder.svg"} alt="KF Logo" className="logo" />
      </nav>
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="title">Transform Your <span className="highlight">Business Growth</span></h1>
            <p className="value-prop">
              Your personal AI-powered Product and Growth Expert
            </p>
            <p className="description">
              Leverage cutting-edge AI technology and proven growth strategies to scale your business effectively.
            </p>
            <button className="cta-button">
              Schedule a Strategy Session
            </button>
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

export default Header;
