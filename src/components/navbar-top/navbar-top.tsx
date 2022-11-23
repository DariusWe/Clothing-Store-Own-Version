import React from "react";
import { DesktopNavbar, MobileAndTabletNavbar, RightSection, SignInSpan } from "./navbar-top.styles";
import { CartIcon, ProfileIcon, HeartIconNavbar, MenuIcon, Logo } from "../index";
import { useNavigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../store/typed-hooks";
import { VIEWPORT_TYPES } from "../../store/slices/current-viewport.slice";

// Gets rerendered on location change because of parent

const NavbarTop: React.FC = () => {
  console.log("NavbarTop");
  const navigate = useNavigate();
  const urlPath = useLocation().pathname;
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const currentViewport = useTypedSelector(state => state.currentViewport.type);

  return currentViewport === VIEWPORT_TYPES.DESKTOP ? (
    <DesktopNavbar>
      {currentUser ? <ProfileIcon /> : <SignInSpan onClick={() => navigate("/sign-in")}>SIGN IN</SignInSpan>}
      <HeartIconNavbar />
      <CartIcon theme="dark" />
    </DesktopNavbar>
  ) : (
    <MobileAndTabletNavbar $theme={urlPath === "/women" || urlPath === "/men" ? "light" : "dark"}>
      <Logo />
      <RightSection>
        {currentUser ? <ProfileIcon /> : <SignInSpan onClick={() => navigate("/sign-in")}>SIGN IN</SignInSpan>}
        <HeartIconNavbar />
        <CartIcon theme={urlPath === "/women" || urlPath === "/men" ? "light" : "dark"} />
        <MenuIcon />
      </RightSection>
    </MobileAndTabletNavbar>
  );
};

export default NavbarTop;
