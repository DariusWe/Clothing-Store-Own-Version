import { Container, InfoSection, DeleteIcon } from "./shopping-cart-item.styles";
import { addItemToCart, decreaseQuantity, removeFromCart } from "../store/cart/cart-helpers";
import { useDispatch } from "react-redux/es/hooks/useDispatch"; // wtf is this path?
import { useSelector } from "react-redux/es/hooks/useSelector"; // wtf is this path?

const ShoppingCartItem = ({ product }) => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <InfoSection>
        <span>
          <b>{product.name}</b>
        </span>
        <span>{`Price: ${product.price * product.quantity} €`}</span>
        <div>
          <span>Amount: </span>
          <button onClick={() => dispatch(decreaseQuantity(cartItems, product))}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch(addItemToCart(cartItems, product))}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </InfoSection>
      <DeleteIcon onClick={() => dispatch(removeFromCart(cartItems, product))}>
        <i className="fa-solid fa-trash-can"></i>
      </DeleteIcon>
    </Container>
  );
};

export default ShoppingCartItem;
