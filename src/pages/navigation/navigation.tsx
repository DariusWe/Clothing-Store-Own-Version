import React from "react";
import { MainContainer, ContentArea } from "./navigation.styles";
import { Outlet } from "react-router-dom";
import NavbarSide from "../../components/navbar-side/navbar-side";
import NavbarTop from "../../components/navbar-top/navbar-top";
import SlideMenu from "../../components/slide-menu/slide-menu";

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
