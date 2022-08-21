import { Container, InfoSection } from "./shopping-cart-item.styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

const ShoppingCartItem = ({ product }) => {
  const { addToShoppingCart, decreaseQuantity, removeFromShoppingCart } = useContext(ShoppingCartContext);

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <InfoSection>
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
      </InfoSection>
    </Container>
  );
};

export default ShoppingCartItem;
