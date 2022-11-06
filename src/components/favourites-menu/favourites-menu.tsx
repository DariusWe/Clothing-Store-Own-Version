import { Container, Label } from "./favourites-menu.styles";
import SlideMenu from "../slide-menu/slide-menu";
import { useTypedSelector } from "../../store/hooks";
import FavouritesMenuItem from "./favourites-menu-item/favourites-menu-item";

const FavouritesMenu = () => {
  const favouriteItems = useTypedSelector((state) => state.favourites.items);

  return (
    <SlideMenu context="favourites">
      <Container>
      <Label>Favourites</Label>
        {favouriteItems.map((item) => (
          <FavouritesMenuItem key={item.id} product={item} />
        ))}
      </Container>
    </SlideMenu>
  );
};

export default FavouritesMenu;
