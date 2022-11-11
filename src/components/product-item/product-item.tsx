import { Container, HeartIcon, BottomSection, ProductInfo, ImagePlaceholder } from "./product-item.styles";
import { useState } from "react";
import Button from "../button/button";
import { addItemToCart, toggleCart } from "../../store/cart.slice";
import { setFavourites } from "../../store/favourites.slice";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import type { Item } from "../../store/products.slice";

type ProductItemProps = {
  product: Item;
};

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  console.log("ProductItem");
  const [heartClicked, setHeartClicked] = useState(false);
  const dispatch = useTypedDispatch();
  const favItems = useTypedSelector((state) => state.favourites.items);

  return (
    <Container>
      <ImagePlaceholder>
        <img src={product.imageUrl} alt={product.name} />
      </ImagePlaceholder>
      <HeartIcon
        tabIndex={0}
        className="fa-solid fa-heart "
        title="Add to favourites"
        onClick={() => {
          dispatch(setFavourites(product));
          setHeartClicked(true);
        }}
        isActive={favItems.some((item) => item.id === product.id)}
        wasClicked={heartClicked}
      ></HeartIcon>
      <BottomSection>
        <ProductInfo>
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </ProductInfo>
        <Button
          label="ADD TO BAG"
          theme="light"
          onClick={() => {
            dispatch(addItemToCart(product));
            dispatch(toggleCart());
          }}
        />
      </BottomSection>
    </Container>
  );
};

export default ProductItem;
