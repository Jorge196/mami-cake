import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Savour the Sweet"/>
      <h1 className="app__header-h1">Live The Sweet</h1>
      <p className="p__opensans" style={{color: '#FFFFFF', margin: '2rem 0'}}>Stuff about cake and how good and delcious they are yummmmmm</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.cake2} alt="header img" />
  
    </div>
  </div>
);

export default Header;
