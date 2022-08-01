import "./shopping-cart.scss";
import ShoppingCartItem from "./shopping-cart-item";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import { UserAuthContext } from "../contexts/UserAuthContext";
import Button from "./button";

const ShoppingCart = () => {
  const { productsInShoppingCart, setShoppingCartIsOpen } = useContext(ShoppingCartContext);
  const { currentUser } = useContext(UserAuthContext);
  return (
    <div className="shopping-cart-container">
      <i className="fa-solid fa-xmark shopping-cart-closing-btn" onClick={() => setShoppingCartIsOpen(false)}></i>
      {
        productsInShoppingCart.map((product) => (<ShoppingCartItem key={product.id} product={product} />))
      }
      {
        productsInShoppingCart.length > 0 ? (<Button value="Checkout" />) : (<span className="shopping-cart-empty">Your shopping cart is empty</span>)
      }
    </div>
  );
};

export default ShoppingCart;
