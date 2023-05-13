import React from "react";
import "../styles/Header.css";
import headerImage from "../images/banner.jpg";
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <img src={headerImage} alt="Header" className="header-image" />
      <h1 className="header-title">
        We offer you support and growth in your company in this new digital
        world
      </h1>
    </div>
  );
};

export default Header;