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

/* 
Notes:
To animate a component on mount AND unmount, you have to use react-css-transition-group. CSS-transition-group must be leveraged in the
parent component of the element that should be animated. The solution down here, as messy as it looks, is the only one that works correctly.
Other (more elegant) solutions won't work:
- Just defining one CSSTransition for a general SlideMenu component and then deciding what content to render in the SlideMenu component itself
  would have great benefits (no need to pass props like context, width and children to the SlideMenu anymore, cleaner Navigation component, ...), 
  but will lead to an unwanted effect in the exit animation: The content will unmount before the exit animation starts, hence the slideMenu will 
  slide out without the content.
- The same problem occurs when dynamically passing in context, width and children here in the Navigation component. Therefore it is necessary to
  define every single CSSTransition for every single component...
*/

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
