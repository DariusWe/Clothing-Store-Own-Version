import "./shopping-cart.scss";
import ShoppingCartItem from "./shopping-cart-item";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";
import Button from "./button";

const ShoppingCart = () => {
  const { productsInShoppingCart } = useContext(ShoppingCartContext);
  return (
    <div className="shopping-cart-container">
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
