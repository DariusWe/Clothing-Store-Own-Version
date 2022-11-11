import { Container, NavLink } from "./navbar-top.styles";
import ShoppingIcon from "../shopping-icon/shopping-icon";
import ProfileIcon from "../profile-icon/profile-icon";
import { useNavigate } from "react-router-dom";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { toggleFavouritesMenu } from "../../store/favourites.slice";
import { useRef } from "react";

// Gets rerendered on location change because of parent
// NavLink looks like NavbarSideLink component. Styled components look like components in general. Kind of annoying. Solution for this?

const NavbarTop = () => {
  console.log("NavbarTop");
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  // const likedItems = useTypedSelector((state) => state.favourites.items);
  // const likedItemsLength = useRef<number>(0);
  // const likedItemsLengthChanged = likedItems.length === likedItemsLength.current ? false : true;
  
  return (
    <Container>
      {currentUser ? <ProfileIcon /> : <NavLink onClick={() => navigate("/sign-in")}>SIGN IN</NavLink>}
      <i className="fa-solid fa-heart" onClick={() => dispatch(toggleFavouritesMenu())}></i>
      <ShoppingIcon />
      {/* <i className="fa-solid fa-bars"></i> */}
    </Container>
  );
};

export default NavbarTop;
