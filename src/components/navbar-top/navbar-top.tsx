import { Container } from "./navbar-top.styles";
import { CartIcon, ProfileIcon, HeartIconNavbar } from "../index";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../store/hooks";

// Gets rerendered on location change because of parent

const NavbarTop = () => {
  console.log("NavbarTop");
  const navigate = useNavigate();
  const currentUser = useTypedSelector((state) => state.user.currentUser);

  return (
    <Container>
      {currentUser ? <ProfileIcon /> : <span onClick={() => navigate("/sign-in")}>SIGN IN</span>}
      <HeartIconNavbar />
      <CartIcon />
    </Container>
  );
};

export default NavbarTop;
