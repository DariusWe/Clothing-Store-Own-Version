import { MainContainer, ContentArea, DarkOverlay } from "./navigation.styles";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setUrlGender } from "../store/url/url.actions";
import NavbarSide from "../components/navbar-side";
import ProfilePopup from "../components/profile-popup";
import ShoppingCart from "../components/shopping-cart";
import NavbarTop from "../components/navbar-top";
import { useSelector, useDispatch } from "react-redux";

// isCartOpen vs cartIsOpen. Look below and decide.
// Why is Navigation rerendering everytime i change to another category?

const Navigation = () => {
  console.log("Render/Rerender of Navigation");
  const location = useLocation();
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const profileMenuIsOpen = useSelector((state) => state.user.profileMenuIsOpen);

  useEffect(() => {
    // Checking the gender in the current URL and saving the value in global state. Other components render depending on this value.
    // Why not check the URL in each of these components individually with useLocation? Because of too much logic --> gets messy.
    // Why using the useEffect Hook here and not in App.js? Because it leverages useLocation() which is only available in <BrowserRouter>.
    if (location.pathname === "/" || location.pathname.includes("/women")) {
      dispatch(setUrlGender("women"));
    } else if (location.pathname.includes("/men")) {
      dispatch(setUrlGender("men"));
    } else {
      dispatch(setUrlGender("none"));
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
      {profileMenuIsOpen ? <ProfilePopup /> : null}
      {isCartOpen || profileMenuIsOpen ? <DarkOverlay /> : null}
    </MainContainer>
  );
};

export default Navigation;
