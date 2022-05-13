import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about" >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.letters} alt="letter_overlay"  />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.whisk} alt="about_whisk" className="whisk__img2" style={{height: "75px" }}/>
        <p className="p__opensans">something something something cake cake cake i love cake yum cake its good its good so is the frosting... too</p>
        <button type="button" className="custom__button">Know more</button>
      </div>

      <div className="app__aboutus-content_spatula flex__center">
        <img src={images.blackrubberspatula}  alt="about_spatula" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.whisk} alt="about_whisk" className="whisk__img2" style={{height: "75px" }}/>
        <p className="p__opensans">something something something cake cake cake i love cake yum cake its good its good so is the frosting... too</p>
        <button type="button" className="custom__button">Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
