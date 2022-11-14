import React from "react";
import { MainContainer, ContentArea } from "./navigation.styles";
import { Outlet } from "react-router-dom";
import { NavbarSide, NavbarTop, SlideMenu } from "../../components/index";

const Navigation = React.memo(() => {
  console.log("Navigation");

  return (
    <MainContainer>
      <NavbarSide />
      <ContentArea>
        <NavbarTop />
        <Outlet />
      </ContentArea>
      <SlideMenu />
    </MainContainer>
  );
});

export default Navigation;
