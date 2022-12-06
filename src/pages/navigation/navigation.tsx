import React from "react";
import { Container, ContentArea } from "./navigation.styles";
import { Outlet } from "react-router-dom";
import { NavbarSide, NavbarTop, SlideMenu } from "../../components";
import { useTypedSelector } from "../../store/typed-hooks";
import { VIEWPORT_TYPES } from "../../store/slices/current-viewport.slice";

const Navigation = React.memo(() => {
  const currentViewport = useTypedSelector((state) => state.currentViewport.type);

  return (
    <Container>
      {currentViewport === VIEWPORT_TYPES.DESKTOP && <NavbarSide />}
      <ContentArea $layoutFor={currentViewport}>
        <Outlet />
      </ContentArea>
      <NavbarTop />
      <SlideMenu />
    </Container>
  );
});

export default Navigation;
