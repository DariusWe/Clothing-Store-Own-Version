import React from "react";
import { DesktopNavbar, MobileAndTabletNavbar, RightSection, SignInSpan } from "./navbar-top.styles";
import { CartIcon, ProfileIcon, HeartIconNavbar, MenuIcon, Logo } from "../index";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../store/typed-hooks";
import { VIEWPORT_TYPES } from "../../store/slices/current-viewport.slice";

// Gets rerendered on location change because of parent

const NavbarTop: React.FC = () => {
  console.log("NavbarTop");
  const navigate = useNavigate();
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const currentViewport = useTypedSelector(state => state.currentViewport.type);

  return currentViewport === VIEWPORT_TYPES.DESKTOP ? (
    <DesktopNavbar>
      {currentUser ? <ProfileIcon /> : <SignInSpan onClick={() => navigate("/sign-in")}>SIGN IN</SignInSpan>}
      <HeartIconNavbar />
      <CartIcon />
    </DesktopNavbar>
  ) : (
    <MobileAndTabletNavbar>
      <Logo />
      <RightSection>
        {currentUser ? <ProfileIcon /> : <SignInSpan onClick={() => navigate("/sign-in")}>SIGN IN</SignInSpan>}
        <HeartIconNavbar />
        <CartIcon />
        <MenuIcon />
      </RightSection>
    </MobileAndTabletNavbar>
  );
};

export default NavbarTop;
