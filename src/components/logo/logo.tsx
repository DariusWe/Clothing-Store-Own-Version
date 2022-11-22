import React from "react";
import { LogoContainer } from "./logo.styles";

const Logo = () => {
  console.log("Logo");
  return (
    <LogoContainer to="/">
      <img alt="RandomWear Logo" src={require("../../assets/logo5_.png")} />
    </LogoContainer>
  );
};

export default React.memo(Logo);
