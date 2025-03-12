import React from "react";
import Menu from "./Menu";
import "./Header.css";
import logo from "../image/avatar_small.png";
import check from "../image/archive_check.png";
import search from "../image/search.png";
import avatar from "../image/avatar.png";
export default function Header() {
  return (
    <header className="flex items-center justify-center px-[20px] py-[10px] bg-[white] [box-shadow:0_2px_5px_rgba(0,_0,_0,_0.1)] h-[100px]">
      {/* Logo */}
      <div className="flex items-center text-xl text-[#f62682] ">
        <img src={logo} />
      </div>

      {/* Thanh tìm kiếm */}
      <div className="flex items-center bg-[#f7f7f7] px-[15px] py-[8px] rounded-[25px] w-100">
        <img src={search} alt="" />
        <i className="fa fa-search"></i>
        <input className="border-none outline-[none] bg-transparent ml-[10px] w-full" type="text" placeholder="What would you like to cook?" />
      </div>

      {/* Menu */}
      <Menu className="menu flex" />

      {/* Nút Recipe Box + Avatar */}
      <div className="user-actions flex">
        <button className="recipe-box flex">
          <img src={check} alt="" />
          <i className="fa fa-envelope"></i> Your Recipe Box
        </button>
        <img src={avatar} alt="User Avatar" className="avatar" />
      </div>
    </header>
  );
}
