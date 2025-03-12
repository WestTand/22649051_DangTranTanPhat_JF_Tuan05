import React from 'react';
import './Menu.css';
function Menu(){
    const menuItems = ["What to cook", "Recipes", "Ingredients", "Occasion", "About us","Your Receipt Box"];
  
    return (
        <div>
            <ul>
                {menuItems.map((item, index) => {
                    return <li key={index} className='menu'>{item}</li>
                })}
            </ul>
        </div>
    );
}export default Menu;