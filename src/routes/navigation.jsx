import "./navigation.scss";
import { Outlet } from "react-router-dom";
import React, { useContext } from "react"; // do we need React here?
import NavbarMain from "../components/navbar-main";
import NavbarSecond from "../components/navbar-second";
import ProfilePopup from "../components/profile-popup";
import ShoppingCart from "../components/shopping-cart";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { ProfilePopupContext } from "../contexts/profilePopupContext";

const Navigation = () => {
  const { shoppingCartIsOpen } = useContext(ShoppingCartContext);
  const { profilePopupIsOpen } = useContext(ProfilePopupContext);

  return (
    <React.Fragment>
      <NavbarMain />
      <NavbarSecond />
      {shoppingCartIsOpen ? <ShoppingCart /> : null}
      {profilePopupIsOpen ? <ProfilePopup /> : null}
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
