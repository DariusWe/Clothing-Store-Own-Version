import React from "react";
import { MainContainer, ContentArea } from "./navigation.styles";
import { Outlet } from "react-router-dom";
import { NavbarSide, NavbarTop, SlideMenu } from "../../components/index";
import { useTypedSelector } from "../../store/typed-hooks";
import { VIEWPORT_TYPES } from "../../store/slices/current-viewport.slice";

const Navigation = React.memo(() => {
  console.log("Navigation");
  const currentViewport = useTypedSelector((state) => state.currentViewport.type);

  return (
    <MainContainer>
      {currentViewport === VIEWPORT_TYPES.DESKTOP && <NavbarSide />}
      <ContentArea layoutFor={currentViewport}>
        <Outlet />
      </ContentArea>
      <NavbarTop />
      <SlideMenu />
    </MainContainer>
  );
});

export default Navigation;
