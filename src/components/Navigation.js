import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg"
import SearchForm from "./SearchForm/SearchForm";

const setActiveLink = ({ isActive }) => (isActive ? "active-link" : "");

const Navigation = () => (
  <nav className="navigation">
    <div className="logo">
      <img src={Logo} alt="movie logo" width="35px"/>
      <p className="logo-title">movies</p>
    </div>
    <ul className="nav-list">
      <li className="nav-list__item">
        <NavLink to="/" className={setActiveLink} className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={setActiveLink} className="nav-link">
          Movies
        </NavLink>
      </li>
    </ul>
      <SearchForm/>
  </nav>
);

export default Navigation;
