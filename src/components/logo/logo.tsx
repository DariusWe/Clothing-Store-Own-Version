import React from "react";
import { LogoContainer } from "./logo.styles";

const Logo = () => {
  return (
    <LogoContainer to="/">
      <span>R</span>
      <span>.</span>
      <p>Random Clothing Store</p>
      {/* <img alt="RandomWear Logo" src={require("../../assets/logo1.png")} /> */}
    </LogoContainer>
  );
};

export default React.memo(Logo);
