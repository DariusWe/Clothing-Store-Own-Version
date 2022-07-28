import "./navbar-second.scss";
import { useLocation} from "react-router-dom";
import { useContext } from "react";
import { ShopProductsContext } from "../contexts/shopProductsContext";
import NavbarLink from "./navbar-link";

const NavbarSecond = () => {
  const location = useLocation();
  const { womenProducts, menProducts } = useContext(ShopProductsContext);

  return (
    <div className="navbar-second-container">
      {location.pathname === "/" || location.pathname.includes("women")
        ? womenProducts.map((category) => <NavbarLink key={category.id} title={category.title} sex="women" />)
        : menProducts.map((category) => <NavbarLink key={category.id} title={category.title} sex="men" />)}
    </div>
  );
};

export default NavbarSecond;
