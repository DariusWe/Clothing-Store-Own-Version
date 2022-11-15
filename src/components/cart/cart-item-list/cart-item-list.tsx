import { Container } from "./cart-item-list.styles";
import { useState, useRef, useEffect } from "react";
import { useTypedSelector } from "../../../store/hooks";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CartItem } from "../../index";

const CartList = () => {
    const cartItems = useTypedSelector((state) => state.cart.cartItems);

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
      }, 500);
    }
  }, [itemWasRemoved]);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Container itemRemoved={itemWasRemoved}>
        <TransitionGroup>
          {cartItems
            .map((product) => (
              <CSSTransition key={product.id} timeout={300} classNames="cart-item">
                <CartItem key={product.id} product={product} />
              </CSSTransition>
            ))
            .reverse()}
        </TransitionGroup>
      </Container>
  );
};

export default CartList;
