import { SideBarContainer, GenderLink, CategoriesList } from "./navbar-side.styles";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { ShopProductsContext } from "../contexts/shopProductsContext";
import { GenderInUrlContext } from "../contexts/genderInUrlContext";
import Logo from "./logo";
import NavbarLink from "./navbar-link";

const NavbarSide = () => {
  const { womenProducts, menProducts } = useContext(ShopProductsContext);
  const gender = useContext(GenderInUrlContext);
  const location = useLocation();

  return (
    <SideBarContainer>
      <Logo />
      {location.pathname.includes("men") || location.pathname === "/" ? (
        <>
          <div>
            <GenderLink to="/women" fontWeight={gender === "women" ? "800" : "400"}>Women</GenderLink>
            <GenderLink to="/men" fontWeight={gender === "men" ? "800" : "400"}>Men</GenderLink>
          </div>
          <CategoriesList>
            {gender === "women"
              ? womenProducts.map((category) => <NavbarLink key={category.id} category={category} />)
              : menProducts.map((category) => <NavbarLink key={category.id} category={category} />)}
          </CategoriesList>
        </>
      ) : null}
    </SideBarContainer>
  );
};

export default NavbarSide;

/*
import "./navbar-side.scss";
import { Link, useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { ShopProductsContext } from "../contexts/shopProductsContext";
import { GenderInUrlContext } from "../contexts/genderInUrlContext";
import Logo from "./logo";
import NavbarLink from "./navbar-link";

const NavbarSide = () => {
  const { womenProducts, menProducts } = useContext(ShopProductsContext);
  const gender = useContext(GenderInUrlContext);
  const location = useLocation();

  return (
    <div className="navbar-side-container">
      <Logo />
      {location.pathname.includes("men") || location.pathname === "/" ? (
        <>
          <div className="navbar-gender-selection">
            <Link to="/women" className={gender === "women" ? "navbar-gender is-active" : "navbar-gender"}>
              Women
            </Link>
            <Link to="/men" className={gender === "men" ? "navbar-gender is-active" : "navbar-gender"}>
              Men
            </Link>
          </div>
          <div className="categories-list">
            {gender === "women"
              ? womenProducts.map((category) => <NavbarLink key={category.id} category={category} />)
              : menProducts.map((category) => <NavbarLink key={category.id} category={category} />)}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NavbarSide;
*/
