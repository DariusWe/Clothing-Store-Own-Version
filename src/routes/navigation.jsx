import { MainContainer, ContentArea, DarkOverlay } from "./navigation.styles";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ProfilePopupContext } from "../contexts/profilePopupContext";
import NavbarSide from "../components/navbar-side";
import ProfilePopup from "../components/profile-popup";
import ShoppingCart from "../components/shopping-cart";
import NavbarTop from "../components/navbar-top";
import { useSelector } from "react-redux/es/hooks/useSelector"; // wtf is this path?

const Navigation = () => {
  const { profilePopupIsOpen } = useContext(ProfilePopupContext);
  const isCartOpen = useSelector(state => state.cart.isCartOpen);

  return (
    <MainContainer>
        <NavbarSide />
        <ContentArea>
          <NavbarTop />
          <Outlet />
        </ContentArea>
        {isCartOpen ? <ShoppingCart /> : null}
        {profilePopupIsOpen ? <ProfilePopup /> : null}
        {isCartOpen || profilePopupIsOpen ? <DarkOverlay />: null}
    </MainContainer>
  );
};

export default Navigation;
