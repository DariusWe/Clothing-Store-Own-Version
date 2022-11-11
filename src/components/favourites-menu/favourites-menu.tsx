import { Container, Label } from "./favourites-menu.styles";
import { useTypedSelector } from "../../store/hooks";
import FavouritesMenuItem from "./favourites-menu-item/favourites-menu-item";

const FavouritesMenu = () => {
  const favouriteItems = useTypedSelector((state) => state.favourites.items);

  return (
    <Container>
      <Label>Favourites</Label>
      {favouriteItems.map((item) => (
        <FavouritesMenuItem key={item.id} product={item} />
      ))}
    </Container>
  );
};

export default FavouritesMenu;
