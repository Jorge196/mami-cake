import React from 'react';
import { GiCakeSlice } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return(
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.ltslogo}  alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#cake">Cakes</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiCakeSlice color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onCLick={() => setToggleMenu(false)} />      
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#cake">Cakes</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>  
    </nav>
  );
};

export default Navbar;
