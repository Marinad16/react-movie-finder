import React from "react";
import { NavLink } from "react-router-dom";
import style from"./Navigation.module.scss"

const setActiveLink = ({ isActive }) => (isActive ? `${style.activeLink}` : `${style.navLink}`);

const Navigation = () => (
  <nav className={style.navigation}>
    <ul className={style.navList}>
      <li>
        <NavLink to="/" className={setActiveLink} >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies?page=1" className={setActiveLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
