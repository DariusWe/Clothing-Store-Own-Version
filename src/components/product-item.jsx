import { Container, BottomSection, ProductInfo, AddButton } from "./product-item.styles";
import { addItemToCart } from "../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ product }) => {
  console.log("Render/Rerender of ProductItem");
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <BottomSection>
        <ProductInfo>
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </ProductInfo>
        <AddButton onClick={() => dispatch(addItemToCart(cartItems, product))}>
          <span>+</span>
        </AddButton>
      </BottomSection>
    </Container>
  );
};

export default ProductItem;
