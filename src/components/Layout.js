import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import React from "react";
import SearchForm from "../UI/SearchForm/SearchForm";
import {Logo} from "./Logo";
import Footer from "./Footer";

const Layout = () => {

  return (
    <>
      <header className="site-header">
        <div className="container header">
          <Logo/>
          <Navigation />
          <SearchForm />
        </div>
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer>
        <div className="container footer">
          <Footer/>
        </div>
      </footer>
    </>
  );
};

export default Layout;

