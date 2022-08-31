import { Container, BottomSection, ProductInfo, AddButton } from "./product-item.styles";
import { addItemToCart } from "../store/cart/cart-helpers";
import { useDispatch } from "react-redux/es/hooks/useDispatch"; // wtf is this path?
import { useSelector } from "react-redux/es/hooks/useSelector"; // wtf is this path?

const ProductItem = ({ product }) => {
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
