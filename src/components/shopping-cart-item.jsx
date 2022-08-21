import { Container, InfoSection, DeleteIcon } from "./shopping-cart-item.styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

const ShoppingCartItem = ({ product }) => {
  const { addToShoppingCart, decreaseQuantity, removeFromShoppingCart } = useContext(ShoppingCartContext);

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <InfoSection>
        <span>
          <b>{product.name}</b>
        </span>
        <span>{`Price: ${product.price * product.quantity} €`}</span>
        <div>
          <span>Amount: </span>
          <button onClick={() => decreaseQuantity(product)}>
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => addToShoppingCart(product)}>
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </InfoSection>
      <DeleteIcon onClick={() => removeFromShoppingCart(product)}>
        <i class="fa-solid fa-trash-can"></i>
      </DeleteIcon>
    </Container>
  );
};

export default ShoppingCartItem;
