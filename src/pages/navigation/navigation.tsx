import React from "react";
import { MainContainer, ContentArea, DarkOverlay } from "./navigation.styles";
import { Outlet } from "react-router-dom";
import { useTypedSelector } from "../../store/hooks";
import { selectIsCartOpen } from "../../store/cart.slice";
import NavbarSide from "../../components/navbar-side/navbar-side";
import ProfileMenu from "../../components/profile-menu/profile-menu";
import ShoppingCart from "../../components/shopping-cart/shopping-cart";
import NavbarTop from "../../components/navbar-top/navbar-top";
import FavouritesMenu from "../../components/favourites-menu/favourites-menu";

const Navigation = React.memo(() => {
  console.log("Navigation");
  const isCartOpen = useTypedSelector(selectIsCartOpen);
  const isProfileMenuOpen = useTypedSelector((state) => state.user.isProfileMenuOpen);
  const isFavouritesOpen = useTypedSelector((state) => state.favourites.isFavouritesOpen);

  return (
    <MainContainer>
      <NavbarSide />
      <ContentArea>
        <NavbarTop />
        <Outlet />
      </ContentArea>
      {isProfileMenuOpen && <ProfileMenu />}
      {isFavouritesOpen && <FavouritesMenu />}
      {isCartOpen && <ShoppingCart />}
      {(isCartOpen || isProfileMenuOpen || isFavouritesOpen) && <DarkOverlay />}
    </MainContainer>
  );
});

export default Navigation;
