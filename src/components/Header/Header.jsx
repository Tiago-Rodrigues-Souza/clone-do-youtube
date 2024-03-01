import React from "react";
import "./Header.css";

import logo from "../../assets/YouTube-Logo.png";
import { FaChromecast } from "react-icons/fa6";
import { GoBell } from "react-icons/go";
import { IoSearch } from "react-icons/io5";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" />
      <nav>
        <FaChromecast />
        <GoBell />
        <IoSearch />
      </nav>
    </header>
  );
}

export default Header;
