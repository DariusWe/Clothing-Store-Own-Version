import { Container, NavLink } from "./navbar-top.styles";
import ShoppingIcon from "../shopping-icon/shopping-icon";
import ProfileIcon from "../profile-icon/profile-icon";
import { useNavigate } from "react-router-dom";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { toggleFavouritesMenu } from "../../store/favourites.slice";
import { useEffect, useState } from "react";

// Gets rerendered on location change because of parent

const NavbarTop = () => {
  console.log("NavbarTop");
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const currentUser = useTypedSelector((state) => state.user.currentUser);

  const likedItems = useTypedSelector((state) => state.favourites.items);
  const [prevLikedItemsLength, setPrevLikedItemsLength] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      setPrevLikedItemsLength(likedItems.length);
    }, 500);
  }, [likedItems.length]);

  return (
    <Container>
      {currentUser ? <ProfileIcon /> : <NavLink onClick={() => navigate("/sign-in")}>SIGN IN</NavLink>}
      <i
        className={likedItems.length > prevLikedItemsLength ? "fa-solid fa-heart animate" : "fa-solid fa-heart"}
        onClick={() => dispatch(toggleFavouritesMenu())}
      ></i>
      <ShoppingIcon />
      {/* <i className="fa-solid fa-bars"></i> */}
    </Container>
  );
};

export default NavbarTop;
