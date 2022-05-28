import React from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm/SearchForm";

const setActiveLink = ({ isActive }) => (isActive ? "active-link" : "");

const Navigation = () => (
  <nav className="navigation">
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
  </nav>
);

export default Navigation;
