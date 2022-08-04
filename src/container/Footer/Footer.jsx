import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';


import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className="app__footer app__bg section__padding">
    <FooterOverlay/>
    <Newsletter/>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">3 P 43th St, Unknown, XY 01231, ABC</p>
        <p className="p__opensans">+0 123-456-7890</p>
        <p className="p__opensans">+0 123-456-7890</p>
      </div>
      <div className="app__footer-links_logo">
        <h1>BIARIE</h1>
        <p className="p__opensans">"Nothing brings people together like good food because good food is good mood!"</p>
        <img src={images.gold} alt="footer-gold" className="gold__img" style={{marginTop: 15}}/>
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
      </div>
      </div>
      <div className="app__footer-links_work ">
        <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">09:00am - 12:00pm</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">10:00am - 01:00pm</p>
      </div>
    </div>
    <div className="footer__copyright">
        <p className="p__opensans">2022 Biarie. All Rights reserved.</p>
      </div>
  </div>
);

export default Footer;