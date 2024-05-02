import React from 'react';
import './../../App.css';
import ghumti from '../../assets/Images/Ghumti.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { BsFillTelephoneFill } from "react-icons/bs";
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={ghumti} alt="app__logo" />
      </div>
      <div className="app__navbar-links">
        <ul className="app__navbar-links">
          <li className="p__opensans"><a href="/">Home</a></li>
          <li className="p__opensans"><a href="/menu">Menu</a></li>
          <li className="p__opensans"><a href="/reservation">Reservation</a></li>
          <li className="p__opensans"><a href="/contact">Contact Us</a></li>
        </ul>
        <div className="contact-phone"><BsFillTelephoneFill color='white' className='icon'/><a href="tel:+61-423356692">+61-423356692</a></div>
      </div>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="/" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="/menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="/reservation" onClick={() => setToggleMenu(false)}>Reservation</a></li>
              <li><a href="/contact" onClick={() => setToggleMenu(false)}>Contact Us</a></li>
              <li><BsFillTelephoneFill color='goldenrod' className='icon'/><a href="tel:+61-423356692">+61-423356692</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;  