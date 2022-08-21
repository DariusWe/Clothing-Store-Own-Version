import { MainContainer, ContentArea, DarkOverlay } from "./navigation.styles";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { ProfilePopupContext } from "../contexts/profilePopupContext";
import NavbarSide from "../components/navbar-side";
import ProfilePopup from "../components/profile-popup";
import ShoppingCart from "../components/shopping-cart";
import NavbarTop from "../components/navbar-top";

const Navigation = () => {
  const { shoppingCartIsOpen } = useContext(ShoppingCartContext);
  const { profilePopupIsOpen } = useContext(ProfilePopupContext);

  return (
    <MainContainer>
        <NavbarSide />
        <ContentArea>
          <NavbarTop />
          <Outlet />
        </ContentArea>
        {shoppingCartIsOpen ? <ShoppingCart /> : null}
        {profilePopupIsOpen ? <ProfilePopup /> : null}
        {shoppingCartIsOpen || profilePopupIsOpen ? <DarkOverlay />: null}
    </MainContainer>
  );
};

export default Navigation;
