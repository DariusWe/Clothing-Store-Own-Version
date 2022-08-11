import "./shopping-cart-item.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

const ShoppingCartItem = ({ product }) => {
  const { addToShoppingCart, decreaseQuantity, removeFromShoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="shopping-cart-item-container">
      <div className="shopping-cart-item-img-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="shopping-cart-item-info">
        <span>{product.name}</span>
        <div className="shopping-cart-item-quantity">
          <button onClick={() => decreaseQuantity(product)}>-</button>
          <span> {product.quantity} </span>
          <button onClick={() => addToShoppingCart(product)}>+</button>
        </div>
        <span>
          {product.quantity} x {`${product.price} EUR`}
        </span>
        <button className="shopping-cart-item-delete" onClick={() => removeFromShoppingCart(product)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
