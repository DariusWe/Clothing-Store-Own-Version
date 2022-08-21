import { Container, TopSection, ItemList, EmptyMessage, BottomSection, Row } from "./shopping-cart.styles";
import ShoppingCartItem from "./shopping-cart-item";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { useNavigate } from "react-router-dom";
import Button from "./button";

const ShoppingCart = () => {
  const { productsInShoppingCart, setShoppingCartIsOpen, total, totalQuantity } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <Container>
      <TopSection>
        <span>Cart</span>
        <i className="fa-solid fa-xmark" onClick={() => setShoppingCartIsOpen(false)}></i>
      </TopSection>
      <ItemList>
        {productsInShoppingCart.map((product) => (
          <ShoppingCartItem key={product.id} product={product} />
        )).reverse()}
      </ItemList>
      {productsInShoppingCart.length > 0 ? (
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
              setShoppingCartIsOpen(false);
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
