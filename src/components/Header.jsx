import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={"/"}>
        <img className="max-w-[150px]" src="/public/netflix_logo.svg" alt="netflix-logo" />
      </Link>
    </header>
  );
};

export default Header;
