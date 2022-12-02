import { Container, Row, EmptyMessage } from "./cart-bottom-section.styles";
import { useNavigate } from "react-router-dom";
import { useTypedSelector, useTypedDispatch } from "../../../store/typed-hooks";
import { selectCartTotal, selectCartQuantity, toggleCart } from "../../../store/slices/cart.slice";
import { Button } from "../../index";

const CartBottomSection = () => {
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const cartItems = useTypedSelector((state) => state.cart.cartItems);
  const cartTotal = useTypedSelector(selectCartTotal);
  const cartQuantity = useTypedSelector(selectCartQuantity);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  return (
    <>
      {cartItems.length > 0 ? (
        <Container>
          <Row>
            <span>{`${cartQuantity} Items`}</span>
            <span>
              <b>{`${cartTotal} €`}</b>
            </span>
          </Row>
          <Row>
            <span>Shipping fees</span>
            <span style={{ color: "#32753D" }}>
              <b>free</b>
            </span>
          </Row>
          <Row>
            <span>
              <b>Total</b> <small>- including VAT</small>
            </span>
            <span>
              <b>{`${cartTotal} €`}</b>
            </span>
          </Row>
          <Button
            label="Checkout"
            buttonTheme="dark"
            onClick={() => {
              dispatch(toggleCart());
              currentUser ? navigate("/checkout") : navigate("/sign-in/to-checkout");
            }}
          />
        </Container>
      ) : (
        <EmptyMessage>Your shopping cart is empty</EmptyMessage>
      )}
    </>
  );
};

export default CartBottomSection;
