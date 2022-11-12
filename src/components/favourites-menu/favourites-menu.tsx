import { Container, Label, Notice } from "./favourites-menu.styles";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { toggleFavouritesMenu } from "../../store/favourites.slice";
import FavouritesMenuItem from "./favourites-menu-item/favourites-menu-item";
import { Link } from "react-router-dom";

const FavouritesMenu = () => {
  const favouriteItems = useTypedSelector((state) => state.favourites.items);
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const dispatch = useTypedDispatch();

  return (
    <Container>
      <Label>Favourites</Label>
      {!currentUser && (
        <Notice>
          <i className="fa-solid fa-circle-info"></i>
          <span>Items listed here will not be saved. You have to <Link to="/sign-in" style={{fontWeight: "800"}} onClick={() => dispatch(toggleFavouritesMenu())}>log in</Link> to save your favourite items for future visits.</span>
        </Notice>
      )}
      {favouriteItems.map((item) => (
        <FavouritesMenuItem key={item.id} product={item} />
      ))}
    </Container>
  );
};

export default FavouritesMenu;
