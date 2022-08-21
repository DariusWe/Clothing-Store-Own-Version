import { Container, NavLink } from "./navbar-top.styles";
import ShoppingIcon from "./shopping-icon";
import ProfileIcon from "./profile-icon";
import { useContext } from "react";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";

const NavbarTop = () => {
  const { currentUser } = useContext(UserAuthContext);
  const navigate = useNavigate();
  return (
    <Container>
      {currentUser ? <ProfileIcon /> : <NavLink onClick={() => navigate("/sign-in")}>SIGN IN</NavLink>}
      <i className="fa-solid fa-heart"></i>
      <ShoppingIcon />
      {/* <i class="fa-solid fa-bars"></i> */}
    </Container>
  );
};

export default NavbarTop;
