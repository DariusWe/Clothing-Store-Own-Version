import { Container, HeartIcon, BottomSection, ProductInfo, AddButton, ImagePlaceholder } from "./product-item.styles";
import { addItemToCart } from "../../store/cart.slice";
import { setFavourites } from "../../store/favourites.slice";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import type { Item } from "../../store/products.slice";

type ProductItemProps = {
  product: Item;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  console.log("ProductItem");
  const dispatch = useTypedDispatch();
  const favItems = useTypedSelector((state) => state.favourites.items);

  return (
    <Container>
      <ImagePlaceholder>
        <img src={product.imageUrl} alt={product.name} />
      </ImagePlaceholder>
      <HeartIcon
        className="fa-solid fa-heart"
        title="Add to favourites"
        onClick={() => dispatch(setFavourites(product))}
        isActive={favItems.some((item) => item.id === product.id)}
      ></HeartIcon>
      <BottomSection>
        <ProductInfo>
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </ProductInfo>
        <AddButton onClick={() => dispatch(addItemToCart(product))}>
          <span>ADD TO BAG</span>
        </AddButton>
      </BottomSection>
    </Container>
  );
};

export default ProductItem;
