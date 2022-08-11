import "./shopping-cart.scss";
import ShoppingCartItem from "./shopping-cart-item";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "./button";

const ShoppingCart = () => {
  const { productsInShoppingCart, setShoppingCartIsOpen, total, totalQuantity } = useContext(ShoppingCartContext);
  const { currentUser } = useContext(UserAuthContext);
  const navigate = useNavigate();

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-top">
        <span className="shopping-cart-label">Cart</span>
        <i className="fa-solid fa-xmark shopping-cart-closing-btn" onClick={() => setShoppingCartIsOpen(false)}></i>
      </div>
      <div className="shopping-cart-product-list">
        {productsInShoppingCart.map((product) => (
          <ShoppingCartItem key={product.id} product={product} />
        ))}
      </div>
      {productsInShoppingCart.length > 0 ? (
        <Button
          classNames="checkout-button"
          value={`Checkout (${totalQuantity} items) - ${total} €`}
          onClick={() => {
            setShoppingCartIsOpen(false);
            navigate("/checkout");
          }}
        />
      ) : (
        <span className="shopping-cart-empty">Your shopping cart is empty</span>
      )}
    </div>
  );
};

export default ShoppingCart;
