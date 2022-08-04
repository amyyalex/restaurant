import React from 'react';

import { images } from '../../constants';

import { SubHeading } from '../../components';


const FindUs = () => (
  <div className="app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Somewhere Here Building, Earth Cain Lane, Around, AB7 12Y</p>
        <p className="p__cormorant" style={{ color: '#dcca87', margin:'2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 09:00 am - 04:00 pm</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 04:00 pm</p>
      </div>
      <button className="custom__button" style={{marginTop: '2rem'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="contact image" />
    </div> 
  </div>
);

export default FindUs;