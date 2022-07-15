import React  from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/netflix.svg";

const Logo = () => {
  return (
    <div className="logo">
        <Link to="/">
            <img src={LogoImg} alt="movie logo" width="120px"/>
        </Link>
    </div>
)
}
export {Logo};