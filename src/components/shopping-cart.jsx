import { Container, Label, ItemList, EmptyMessage, BottomSection, Row } from "./shopping-cart.styles";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal, selectCartQuantity, toggleCart } from "../store/cart.slice";
import SlideMenu from "./slide-menu";
import ShoppingCartItem from "./shopping-cart-item";
import Button from "./button";

const ShoppingCart = () => {
  console.log("Render/Rerender of ShoppingCart");
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartQuantity = useSelector(selectCartQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <SlideMenu context="cart">
      <Container>
        <Label>Cart</Label>
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
                dispatch(toggleCart());
                navigate("/checkout");
              }}
            />
          </BottomSection>
        ) : (
          <EmptyMessage>Your shopping cart is empty</EmptyMessage>
        )}
      </Container>
    </SlideMenu>
  );
};

export default ShoppingCart;
