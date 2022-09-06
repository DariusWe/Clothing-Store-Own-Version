import { MainContainer, ContentArea, DarkOverlay } from "./navigation.styles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setCurrLocation } from "../store/curr-user-location/curr-user-location.actions";
import { selectIsProfileMenuOpen } from "../store/user/user.selectors";
import { selectIsCartOpen } from "../store/cart/cart.selectors";
import NavbarSide from "../components/navbar-side";
import ProfilePopup from "../components/profile-popup";
import ShoppingCart from "../components/shopping-cart";
import NavbarTop from "../components/navbar-top";


const Navigation = () => {
  console.log("Render/Rerender of Navigation");
  const location = useLocation();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const isProfileMenuOpen = useSelector(selectIsProfileMenuOpen);

  useEffect(() => {
    // Checking the gender in the current URL and saving the value in global state. Other components render depending on this value.
    // Why not check the URL in each of these components individually with useLocation? Because of too much logic --> gets messy.
    // Why using the useEffect Hook here and not in App.js? Because it leverages useLocation() which is only available in <BrowserRouter>.
    if (location.pathname === "/" || location.pathname.includes("/women")) {
      dispatch(setCurrLocation("women"));
    } else if (location.pathname.includes("/men")) {
      dispatch(setCurrLocation("men"));
    } else {
      dispatch(setCurrLocation("other"));
    }
    // dispatch below only included to get rid of warning
  }, [location, dispatch]);

  return (
    <MainContainer>
      <NavbarSide />
      <ContentArea>
        <NavbarTop />
        <Outlet />
      </ContentArea>
      {isCartOpen ? <ShoppingCart /> : null}
      {isProfileMenuOpen ? <ProfilePopup /> : null}
      {isCartOpen || isProfileMenuOpen ? <DarkOverlay /> : null}
    </MainContainer>
  );
};

export default Navigation;
