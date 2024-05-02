import React from 'react';
import './social.css';
import insta from '../../assets/Images/instagram.png';
import uber from '../../assets/Images/uber-eats.png';
import door from '../../assets/Images/doordash1.png';

function SocialMediaButtons() {
  return (
    <div className="social-media-buttons">
      <a href="https://www.ubereats.com/au/store/ghumti-kitchen/uBHaNRYGSIGHnA2JyZYgog" className="social-button uber-eats">
        <img src={uber} alt="Uber-eats" />
      </a>
      <a href="https://www.doordash.com/en-NZ/store/ghumti-kitchen-allawah-1362838/" className="social-button doordash">
        <img src={door} alt="Doordash"/>
      </a>
      <a href="https://instagram.com" className="social-button instagram">
        <img src={insta} alt="Instagram" />
      </a>
    </div>
  );
}

export default SocialMediaButtons;  