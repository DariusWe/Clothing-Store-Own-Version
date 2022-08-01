import "./navbar-top.scss";
import ShoppingIcon from "./shopping-icon";
import ProfileIcon from "./profile-icon";
import { useContext } from "react";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";

const NavbarTop = () => {
  const { currentUser } = useContext(UserAuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar-top-right-container">
      {currentUser ? <ProfileIcon /> : <span className="sign-in-link" onClick={() => navigate("/sign-in")}>SIGN IN</span>}
      <i className="fa-solid fa-heart"></i>
      <ShoppingIcon />
      {/* <i class="fa-solid fa-bars"></i> */}
    </div>
  );
};

export default NavbarTop;
