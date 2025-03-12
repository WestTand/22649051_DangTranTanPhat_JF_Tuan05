import React from "react";
import Menu from "./Menu";
import "./Header.css";
import logo from "../image/avatar_small.png";
import check from "../image/archive_check.png";
import search from "../image/search.png";
import avatar from "../image/avatar.png";
export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Chefify Logo" />
      </div>

      {/* Thanh tìm kiếm */}
      <div className="search-bar">
        <img src={search} alt="" />
        <i className="fa fa-search"></i>
        <input type="text" placeholder="What would you like to cook?" />
      </div>

      {/* Menu */}
      <Menu className="menu" />

      {/* Nút Recipe Box + Avatar */}
      <div className="user-actions">
        <button className="recipe-box">
          <img src={check} alt="" />
          <i className="fa fa-envelope"></i> Your Recipe Box
        </button>
        <img src={avatar} alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
}
