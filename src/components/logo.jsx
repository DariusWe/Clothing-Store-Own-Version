import { LogoContainer } from "./logo.styles";

const Logo = () => {
  console.log("Render/Rerender of Logo");
  return (
    <LogoContainer to="/">
      <span>lo</span>
      <span>go</span>
    </LogoContainer>
  );
};

export default Logo;
