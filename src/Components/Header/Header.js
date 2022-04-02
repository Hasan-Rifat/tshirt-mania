import React from "react";
import CustomLink from "../CustomLinks/CustomLinks";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2>Welcome to TShirt Mania</h2>
      <nav>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/orderreview">Order Review</CustomLink>
        <CustomLink to="/grandpa">Grandpa</CustomLink>
      </nav>
    </div>
  );
};

export default Header;
