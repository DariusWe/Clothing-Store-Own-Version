import React from "react";
import { LogoContainer } from "./logo.styles";

const Logo = () => {
  return (
    <LogoContainer to="/">
      <span>lo</span>
      <span>go</span>
    </LogoContainer>
  );
};

export default React.memo(Logo);
