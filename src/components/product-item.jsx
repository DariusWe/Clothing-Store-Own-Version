import { Container, BottomSection, ProductInfo, AddButton } from "./product-item.styles";
import { addItemToCart } from "../store/cart.slice";
import { useDispatch } from "react-redux";

// In this component we select cartItems of the store because we need to pass it to addItemToCart().
// This leads to a bunch of unnecessary rerenders everytime cartItems change (the productItem shouldn't rerender in this case)
// We could select the cartItems in the addItemToCart function instead of here to solve this problem.
// Or we use react.memo().

const ProductItem = ({ product }) => {
  console.log("Render/Rerender of ProductItem");
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <BottomSection>
        <ProductInfo>
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </ProductInfo>
        <AddButton onClick={() => dispatch(addItemToCart(product))}>
          <span>+</span>
        </AddButton>
      </BottomSection>
    </Container>
  );
};

export default ProductItem;
