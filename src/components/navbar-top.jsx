import { Container, NavLink } from "./navbar-top.styles";
import ShoppingIcon from "./shopping-icon";
import ProfileIcon from "./profile-icon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/user/user.selectors";

const NavbarTop = () => {
  console.log("Render/Rerender of NavbarTop");
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  return (
    <Container>
      { currentUser ? <ProfileIcon /> : <NavLink onClick={() => navigate("/sign-in")}>SIGN IN</NavLink>}
      <i className="fa-solid fa-heart"></i>
      <ShoppingIcon />
      {/* <i className="fa-solid fa-bars"></i> */}
    </Container>
  );
};

export default NavbarTop;
