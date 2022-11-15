import { StyledHeartIcon } from "./heart-icon-product-card.styles";
import { useTypedDispatch, useTypedSelector } from "../../../store/hooks";
import { setFavourites } from "../../../store/favourites.slice";
import type { Item } from "../../../store/products.slice"; // item good name?

type HeartIconProps = {
  product: Item;
};

const HeartIconForProductCard: React.FC<HeartIconProps> = ({ product }) => {
  const dispatch = useTypedDispatch();
  const favItems = useTypedSelector((state) => state.favourites.items);

  return (
    <StyledHeartIcon
      className="fa-solid fa-heart"
      tabIndex={0}
      title="Add to favourites"
      onClick={() => {
        dispatch(setFavourites(product));
      }}
      isActive={favItems.some((item) => item.id === product.id)}
    ></StyledHeartIcon>
  );
};

export default HeartIconForProductCard;
