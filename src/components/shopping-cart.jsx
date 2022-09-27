import { Container, TopSection, ItemList, EmptyMessage, BottomSection, Row } from "./shopping-cart.styles";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal, selectCartQuantity, toggleIsCartOpen } from "../store/cart.slice";
import ShoppingCartItem from "./shopping-cart-item";
import Button from "./button";

const ShoppingCart = () => {
  console.log("Render/Rerender of ShoppingCart");
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartQuantity = useSelector(selectCartQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartRef = useRef();

  //////////////// Following Code Block checks clicks outside of component and closes Cart if it occurs.

  useEffect(() => {
    document.addEventListener("mousedown", checkClickLocation);
    return () => {
      document.removeEventListener("mousedown", checkClickLocation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkClickLocation = (e) => {
    if (!cartRef.current.contains(e.target)) {
      closeCart();
    }
  };

  const closeCart = () => {
    dispatch(toggleIsCartOpen());
  };

  ////////////////

  return (
    <Container ref={cartRef}>
      <TopSection>
        <span>Cart</span>
        <i className="fa-solid fa-xmark" onClick={closeCart}></i>
      </TopSection>
      <ItemList>
        {cartItems.map((product) => <ShoppingCartItem key={product.id} product={product} />).reverse()}
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
            value="Checkout"
            onClick={() => {
              dispatch(toggleIsCartOpen());
              navigate("/checkout");
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
