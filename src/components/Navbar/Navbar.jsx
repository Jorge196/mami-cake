import React from 'react';
import { GiCakeMenu } from 'react-icons/gi';
import { MdOutlineCakeMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.blackrubberspatula}  alt="app logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#cake">Cakes</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>

    </ul>
  </nav>
);

export default Navbar;
