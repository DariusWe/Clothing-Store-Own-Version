import "./navbar-side.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopProductsContext } from "../contexts/shopProductsContext";
import { GenderInUrlContext } from "../contexts/genderInUrlContext";
import NavbarLink from "./navbar-link";

const NavbarSide = () => {
  const { womenProducts, menProducts } = useContext(ShopProductsContext);
  const gender = useContext(GenderInUrlContext);

  return (
    <div className="navbar-side-container">
      <div className="navbar-logo-container">
        <Link to="/" className="navbar-logo">
          A\W
        </Link>
      </div>
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
    </div>
  );
};

export default NavbarSide;
