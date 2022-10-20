import { Container, NavLink } from "./navbar-top.styles";
import ShoppingIcon from "../shopping-icon/shopping-icon";
import ProfileIcon from "../profile-icon/profile-icon";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks";

// Gets rerendered on location change because of parent
// NavLink looks like NavbarSideLink component. Styled components look like components in general. Kind of annoying. Solution for this?

const NavbarTop = () => {
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  return (
    <Container>
      {currentUser ? <ProfileIcon /> : <NavLink onClick={() => navigate("/sign-in")}>SIGN IN</NavLink>}
      <i className="fa-solid fa-heart"></i>
      <ShoppingIcon />
      {/* <i className="fa-solid fa-bars"></i> */}
    </Container>
  );
};

export default NavbarTop;
