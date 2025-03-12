import React from "react";
import FoodData from "../data/FoodItem";
import "./FoodItem.css";
import IconButton from "../image/Icon Button 73.png";
import left from "../image/Button 89.png";
import right from "../image/Button 96.png";

export default function FoodItem() {
  return (
    <div>
      <div className="food-list">
        {FoodData.map((food) => (
          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <div className="name">
              <h3 className="food-name">{food.name}</h3>
              <img src={IconButton} alt="" className="icon-button" />
            </div>

            <p className="food-time">{food.time} minutes</p>
          </div>
        ))}
      </div>
      <div className="list-page">
        <div>
          <img src={left} alt="" />
        </div>

        <div className="p1">1</div>
        <div className="p2">2</div>
        <div className="p3">3</div>
        <div className="p4">4</div>
        <div className="etc">...</div>
        <div className="p10">10</div>
        <div className="p11">11</div>
        <div>
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
}
