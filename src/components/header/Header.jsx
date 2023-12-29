import React from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../../logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="netflix-logo" />
      <nav className="links">
        <Link to={"./movies"}>Top Movies</Link>
        <Link to={"./tvShows"}>Tv Shows</Link>
        <Link to={"./recommendations"}>Recommendations</Link>
        <Link to={"./about"}>About Us</Link>
      </nav>
      <IoSearch />
    </div>
  );
};

export default Header;

/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwEmDf23gjSBQJqZpNN63vBq9kXgzj2yF-w&usqp=CAU */
