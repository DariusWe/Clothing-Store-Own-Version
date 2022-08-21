import {Container, TopSection, ItemList, CheckoutButton, EmptyMessage} from "./shopping-cart.styles";
import ShoppingCartItem from "./shopping-cart-item";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { useNavigate } from "react-router-dom";

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
        ))}
      </ItemList>
      {productsInShoppingCart.length > 0 ? (
        <CheckoutButton
          value={`Checkout (${totalQuantity} items) - ${total} €`}
          onClick={() => {
            setShoppingCartIsOpen(false);
            navigate("/checkout");
          }}
        />
      ) : (
        <EmptyMessage>Your shopping cart is empty</EmptyMessage>
      )}
    </Container>
  );
};

export default ShoppingCart;
