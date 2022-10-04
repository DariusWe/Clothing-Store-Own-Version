import { MainContainer, ContentArea, DarkOverlay } from "./navigation.styles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setUserLocation } from "../store/user-location.slice";
import { selectIsCartOpen } from "../store/cart.slice";
import NavbarSide from "../components/navbar-side";
import ProfileMenu from "../components/profile-menu";
import ShoppingCart from "../components/shopping-cart";
import NavbarTop from "../components/navbar-top";

const Navigation = () => {
  console.log("Render/Rerender of Navigation");
  const location = useLocation();
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const isProfileMenuOpen = useSelector((state) => state.user.isProfileMenuOpen);

  useEffect(() => {
    // Checking the gender in the current URL and saving the value in global state. Other components render depending on this value.
    // Why not check the URL in each of these components individually with useLocation? Because of too much logic --> gets messy.
    // Why using the useEffect Hook here and not in App.js? Because it leverages useLocation() which is only available in <BrowserRouter>.
    dispatch(setUserLocation(location.pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <MainContainer>
      <NavbarSide />
      <ContentArea>
        <NavbarTop />
        <Outlet />
      </ContentArea>
      {isCartOpen ? <ShoppingCart /> : null}
      {isProfileMenuOpen ? <ProfileMenu /> : null}
      {isCartOpen || isProfileMenuOpen ? <DarkOverlay /> : null}
    </MainContainer>
  );
};

export default Navigation;
