import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Local Foods, the New Deal!"/>
      <h1 className="app__header-h1">The Flavour in Culture</h1>
      <p className="p__opensans" style={{ margin:'2rem 0'}}>Biarie is your premium and authentic one-stop spot for all local meals.
        High-end restaurant serving local cuisine at its finest.
      </p>
      <button type='button' className='custom__button'>Explore Now</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header image" />
    </div>

  </div>
);

export default Header;