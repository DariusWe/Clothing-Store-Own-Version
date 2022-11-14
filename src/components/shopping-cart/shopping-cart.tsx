import { Container, Label, ItemList, EmptyMessage, BottomSection, Row } from "./shopping-cart.styles";
import { useNavigate } from "react-router-dom";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { selectCartItems, selectCartTotal, selectCartQuantity, toggleCart } from "../../store/cart.slice";
import { ShoppingCartItem, Button } from "../index";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ShoppingCart = () => {
  console.log("ShoppingCart");
  const cartItems = useTypedSelector(selectCartItems);
  const cartTotal = useTypedSelector(selectCartTotal);
  const cartQuantity = useTypedSelector(selectCartQuantity);
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Label>Cart</Label>
      <ItemList>
        <TransitionGroup>
          {cartItems
            .map((product) => (
              <CSSTransition key={product.id} timeout={300} classNames="cart-item">
                <ShoppingCartItem key={product.id} product={product} />
              </CSSTransition>
            ))
            .reverse()}
        </TransitionGroup>
      </ItemList>
      {cartItems.length > 0 ? (
        <BottomSection>
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
            theme="dark"
            onClick={() => {
              dispatch(toggleCart());
              currentUser ? navigate("/checkout") : navigate("/sign-in/to-checkout");
            }}
          />
        </BottomSection>
      ) : (
        <EmptyMessage>Your shopping cart is empty</EmptyMessage>
      )}
    </Container>
  );
};

export default ShoppingCart;
