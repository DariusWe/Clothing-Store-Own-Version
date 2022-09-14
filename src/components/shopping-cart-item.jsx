import { Container, InfoSection, DeleteIcon } from "./shopping-cart-item.styles";
import { addItemToCart, decreaseQuantity, removeFromCart } from "../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../store/cart/cart.selectors";

const ShoppingCartItem = ({ product }) => {
  console.log("Render/Rerender of ShoppingCartItem");
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <InfoSection>
        <span>
          <b>{product.name}</b>
        </span>
        <span>{`Price: ${product.price} €`}</span>
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
