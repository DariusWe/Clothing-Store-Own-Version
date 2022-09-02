import { Container, TopSection, ItemList, EmptyMessage, BottomSection, Row } from "./shopping-cart.styles";
import ShoppingCartItem from "./shopping-cart-item";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import { toggleIsCartOpen } from "../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  console.log("Render/Rerender of ShoppingCart");
  const { cartItems, totalQuantity, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <TopSection>
        <span>Cart</span>
        <i className="fa-solid fa-xmark" onClick={() => dispatch(toggleIsCartOpen())}></i>
      </TopSection>
      <ItemList>
        {cartItems.map((product) => (
          <ShoppingCartItem key={product.id} product={product} />
        )).reverse()}
      </ItemList>
      {cartItems.length > 0 ? (
        <BottomSection>
          <Row>
            <span>{`${totalQuantity} Items`}</span>
            <span><b>{`${total} €`}</b></span>
          </Row>
          <Row>
            <span>Shipping fees</span>
            <span style={{color: "#32753D"}}><b>free</b></span>
          </Row>
          <Row>
            <span><b>Total</b> <small>- including VAT</small></span>
            <span><b>{`${total} €`}</b></span>
          </Row>
          {/* <Button
            value="View Cart"
            onClick={() => {
              setShoppingCartIsOpen(false);
              // navigate("/checkout");
            }}
          /> */}
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
