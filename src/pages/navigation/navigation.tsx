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
import SlideMenu from "../../components/slide-menu/slide-menu";
import { CSSTransition } from "react-transition-group";

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
      <CSSTransition in={isCartOpen} unmountOnExit timeout={300} classNames="slide-menu">
        {
          <SlideMenu context="cart">
            <ShoppingCart />
          </SlideMenu>
        }
      </CSSTransition>
      <CSSTransition in={isProfileMenuOpen} unmountOnExit timeout={300} classNames="slide-menu">
        {
          <SlideMenu context="profile-menu" width="18vw">
            <ProfileMenu />
          </SlideMenu>
        }
      </CSSTransition>
      <CSSTransition in={isFavouritesOpen} unmountOnExit timeout={300} classNames="slide-menu">
        {
          <SlideMenu context="favourites">
            <FavouritesMenu />
          </SlideMenu>
        }
      </CSSTransition>
      <CSSTransition
        in={isCartOpen || isProfileMenuOpen || isFavouritesOpen}
        unmountOnExit
        timeout={200}
        classNames="dark-overlay"
      >
        <DarkOverlay />
      </CSSTransition>
    </MainContainer>
  );
});

export default Navigation;
