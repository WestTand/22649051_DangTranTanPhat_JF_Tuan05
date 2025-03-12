import React from "react";
import logo from "../image/avatar_small.png";
import LearnMore from "../data/LearnMore";
import Shop from "../data/Shop";
import Recipes from "../data/Recipes";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="aboutus-logo">
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="form">
            <input type="text" name="" id="" placeholder="Enter your email" />
            <button type="button">Send</button>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
          <p>2023 Chefify Company</p>
          <p>terms of Service | Privacy Policy</p>
        </div>
      </div>
      <div className="learnmore-shop">
        <div className="learn-more">
          <span className="title">Learn More</span>
          {LearnMore.map((item) => (
            <span key={item.id} className="learn-more-item">
              {item.title}
            </span>
          ))}
        </div>
        <div className="shop">
          <span className="title">Shop</span>
          {Shop.map((item) => (
            <span key={item.id} className="shop-item">
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="recipes">
        <span className="title">Recipes</span>
        {Recipes.map((item) => (
          <span key={item.id} className="recipes-item">
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
}
