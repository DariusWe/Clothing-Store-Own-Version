import { Container, InfoSection } from "./favourites-menu-item.styles";
import { useTypedDispatch } from "../../../store/hooks";
import { setFavourites } from "../../../store/favourites.slice";
import { addItemToCart } from "../../../store/cart.slice";
import Button from "../../button/button";
import type { Item } from "../../../store/products.slice";

type FavouritesMenuItemProps = {
  product: Item;
};

const FavouritesMenuItem: React.FC<FavouritesMenuItemProps> = ({ product }) => {
  const dispatch = useTypedDispatch();

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <InfoSection>
        <span>
          <b>{product.name}</b>
        </span>
        <span>{`Price: ${product.price} €`}</span>
        <Button label="Remove" theme="light" onClick={() => dispatch(setFavourites(product))} />
        <Button label="Add to Cart" theme="light" onClick={() => dispatch(addItemToCart(product))} />
      </InfoSection>
    </Container>
  );
};

export default FavouritesMenuItem;
