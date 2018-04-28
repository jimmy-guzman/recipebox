import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <Link to="/">
        <span className="header__title--cursive">Recipe</span>BOX
      </Link>
    </h1>
  </header>
);

export default Header;
