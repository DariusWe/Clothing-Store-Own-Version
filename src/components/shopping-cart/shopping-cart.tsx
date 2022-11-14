import { Container, Label, ItemList, EmptyMessage, BottomSection, Row } from "./shopping-cart.styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { selectCartTotal, selectCartQuantity, toggleCart } from "../../store/cart.slice";
import { ShoppingCartItem, Button } from "../index";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ShoppingCart = () => {
  console.log("ShoppingCart");
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const cartItems = useTypedSelector((state) => state.cart.cartItems);
  const cartTotal = useTypedSelector(selectCartTotal);
  const cartQuantity = useTypedSelector(selectCartQuantity);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  ////// When CartItem finished transitioning out, repaint whole ItemList with a soft opacity transition: /////
  const prevCartItemsLength = useRef(cartItems.length);
  const [itemWasRemoved, setItemWasRemoved] = useState(false);

  useEffect(() => {
    if (cartItems.length < prevCartItemsLength.current) {
      setTimeout(() => {
        setItemWasRemoved(true);
      }, 300);
    }
    prevCartItemsLength.current = cartItems.length;
  }, [cartItems.length]);

  useEffect(() => {
    if (itemWasRemoved) {
      setTimeout(() => {
        setItemWasRemoved(false);
      }, 400);
    }
  }, [itemWasRemoved]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Container>
      <Label>Cart</Label>
      <ItemList itemRemoved={itemWasRemoved}>
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
