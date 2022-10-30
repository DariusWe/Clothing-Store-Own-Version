import React from "react";
import { LogoContainer } from "./logo.styles";

const Logo = () => {
  console.log("Logo");
  return (
    <LogoContainer to="/">
      {/* <span>M&H</span> */}
      {/* <span>.</span> */}
      {/* <div>Logo</div> */}
      <img alt="RandomWear Logo" src={require("../../assets/logo5.png")} />
      {/* <p>Random Clothing Store</p> */}
    </LogoContainer>
  );
};

export default React.memo(Logo);
