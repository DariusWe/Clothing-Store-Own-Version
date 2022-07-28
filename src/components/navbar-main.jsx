import "./navbar-main.scss";
import SearchIcon from "../components/search-icon";
import ProfileIcon from "../components/profile-icon";
import ShoppingIcon from "../components/shopping-icon";
import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

const NavbarMain = () => {
  const location = useLocation();

  // const [activeLink, setActiveLink] = useState("women");
  // const setActive = (e) => {
  //   setActiveLink(e.target.textContent.toLowerCase());
  // }

  return (
    <div className="navbar-main-container">
      <div className="nav-left-side">
        <Link to="/">
          <span className="nav-logo">RandomLogo</span>
        </Link>
        <Link to="/women">
          <span className={location.pathname === "/" || location.pathname.includes("women") ? "nav-link women is-active " : "nav-link women"}>Women</span>
        </Link>
        <Link to="/men">
          <span className={location.pathname === "/men" ? "nav-link men is-active " : "nav-link men"}>Men</span>
        </Link>
        {/* <Link to="/men">
          <span className={location.pathname === "/men" ? "nav-link kids is-active " : "nav-link kids"}>Kids</span>
        </Link> */}
      </div>
      <div className="nav-right-side">
        <SearchIcon />
        <ProfileIcon />
        <ShoppingIcon />
      </div>
    </div>
  );
};

export default NavbarMain;
