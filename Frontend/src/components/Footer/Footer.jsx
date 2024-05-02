import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { SiDoordash, SiUbereats  } from 'react-icons/si';
import './FooterOverlay';
import images from '../../assets/Images/Ghumti.png';
import './Footer.css';

function uber(){
  window.open('https://www.ubereats.com/au/store/ghumti-kitchen/uBHaNRYGSIGHnA2JyZYgog', '_blank');
}
function door(){
  window.open('https://www.doordash.com/en-NZ/store/ghumti-kitchen-allawah-1362838/','_blank');
}
function insta(){
  window.open('https://instagram.com','_blank');
}

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact" id='contact'>
        <h1 className="app__footer-headtext">Contact Us</h1>
        <h3 className="p__opensans">474 Railway Parade, Alawah, NSW AU 2218</h3>
        <h4 className="p__opensans">ghumti.au@gmail.com</h4>
        <h4 className="p__opensans">+61423356692</h4>
        <h4 className='p__opensans'>ABN: 63638902593</h4>
      </div>

      <div className="app__footer-links_logo">
        <img src={images} alt="footer_logo" />
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <SiUbereats onClick={uber} />
          <SiDoordash onClick={door} />
          <FiInstagram onClick={insta} />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <h3 className="p__opensans">Monday-Friday:</h3>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <h3 className="p__opensans">Saturday-Sunday:</h3>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">    
      <hr  style={{
          color: 'black',
          backgroundColor: 'black',
          height: .5,
          width: '100%',
          borderColor : 'black'
      }}/>
      <h4 className="p__opensans">Designed and Maintained by Aadi Marketing Solutions</h4>
    </div>

  </div>
);

export default Footer;