import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import {images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="The Sweet Stuff" />
      <h1 className="headtext_cormorant">For Your Occasion</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__special-menu_cake flex__center">
        <p className="app__specialMenu_menu_heading">Slices</p>
        <div className="app__specialMenu_menu_items">
          {data.slices.map((slice, index) => (
            <MenuItem key={slice.title + index} title={slice.title} price={slice.price} tags={slice.tags} />

          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.cakeutensils} alt="menu img" /> 
      </div>

      <div className="app__special-menu_cake flex__center">
        <p className="app__specialMenu_menu_heading">Cakes</p>
        <div className="app__specialMenu_menu_items">
          {data.cakes.map((cake, index) => (
            <MenuItem key={cake.title + index} title={cake.title} price={cake.price} tags={cake.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: '15px'}}>
      <button type="button" className="custom__button">View More</button>

    </div>
  </div>
);

export default SpecialMenu;
