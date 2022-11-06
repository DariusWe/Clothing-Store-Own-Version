import { Container, Counter } from "./favourites-icon.styles";
import { toggleFavouritesMenu } from "../../store/favourites.slice";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";

const FavouritesIcon = () => {
  console.log("FavouritesIcon");
  const favouritesQuantity = useTypedSelector(state => state.favourites.items).length;
  const dispatch = useTypedDispatch();

  return (
    <Container onClick={() => dispatch(toggleFavouritesMenu)}>
      <i className="fa-solid fa-heart"></i>
      <Counter>{favouritesQuantity}</Counter>
    </Container>
  );
};

export default FavouritesIcon;
