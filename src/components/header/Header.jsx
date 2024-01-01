import React from "react";
import { IoSearch } from "react-icons/io5";
import logo from "../../logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}><img src={logo} className="logo-img" alt="netflix-logo" /></Link>
      <nav className="links">
        <Link to={"/"}>Movies</Link>
        <Link to={"/tvShows"}>TV Shows</Link>
        <Link to={"/recommendations"}>Recently Added</Link>
        <Link to={"/about"}>My List</Link>
      </nav>
      <IoSearch />
    </div>
  );
};

export default Header;

/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwEmDf23gjSBQJqZpNN63vBq9kXgzj2yF-w&usqp=CAU */
