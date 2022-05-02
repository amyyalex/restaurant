import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';

import { SubHeading, MenuItem } from '../../components';

import { data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your taste bud"/>
      <h1 className='headtext__cormorant'>Today's Menu</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_drink flex__center">
        <p className="app__specialMenu-menu_heading"> Drinks </p>
        <div className="app__specialMenu_menu_items">
          {data.drinks.map((drinks, index) => (
            <MenuItem key={drinks.title + index} title={drinks.title} price={drinks.price} tags={drinks.tags}/>
          ))}
        </div>
      </div>
      
      <div className="app__specialMenu-menu_img">
         <img src={"/images/menu1.jpg"} alt="menu image" /> 
      </div>

      <div className="app__specialMenu-menu_food flex__center">
        <p className="app__specialMenu-menu_heading"> Food </p>
        <div className="app__specialMenu_menu_items">
        {data.food.map((food, index) => (
            <MenuItem key={food.title + index} title={food.title} price={food.price} tags={food.tags}/>
          ))}
        </div>
      </div>

    </div>
    <div style={{marginTop: '15px'}}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
