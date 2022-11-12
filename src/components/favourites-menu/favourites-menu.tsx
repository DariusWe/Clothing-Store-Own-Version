import { Container, Label, Notice } from "./favourites-menu.styles";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { toggleFavouritesMenu } from "../../store/favourites.slice";
import FavouritesMenuItem from "./favourites-menu-item/favourites-menu-item";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FavouritesMenu = () => {
  const favouriteItems = useTypedSelector((state) => state.favourites.items);
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    // save list to database
    // also then query from database
    // also then the heartIcon status in productItem must be dependent on database --> will lead to delays?
    // delete favouriteItems from slice
  }, [favouriteItems.length]);

  return (
    <Container>
      <Label>Favourites</Label>
      {!currentUser ? (
        <Notice>
          <i className="fa-solid fa-circle-info"></i>
          <span>Items listed here will not be saved. You have to <Link to="/sign-in" style={{fontWeight: "800"}} onClick={() => dispatch(toggleFavouritesMenu())}>log in</Link> to save your favourite items for future visits.</span>
        </Notice>
      ) : (<Notice>Items that you like are collected here and will be saved for future visits.</Notice>)}
      {favouriteItems.map((item) => (
        <FavouritesMenuItem key={item.id} product={item} />
      ))}
    </Container>
  );
};

export default FavouritesMenu;
