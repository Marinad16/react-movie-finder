import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const Layout = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Navigation />
        </div>
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer>
        <div className="container">
          footer
        </div>
      </footer>
    </>
  );
};

export default Layout

