import { Container, InfoSection, DeleteIcon } from "./cart-item.styles";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../../../../store/slices/cart.slice";
import { useTypedDispatch } from "../../../../store/typed-hooks";
import type { CartItem } from "../../../../store/slices/cart.slice";

type CartListItemProps = {
  product: CartItem;
};

const CartListItem: React.FC<CartListItemProps> = ({ product }) => {
  const dispatch = useTypedDispatch();

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <InfoSection>
        <span>
          <b>{product.name}</b>
        </span>
        <span>{`Price: ${product.price} €`}</span>
        <div>
          <span>Amount: </span>
          <button onClick={() => dispatch(decreaseQuantity(product))}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(product))}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </InfoSection>
      <DeleteIcon onClick={() => dispatch(removeFromCart(product))}>
        <i className="fa-solid fa-trash-can"></i>
      </DeleteIcon>
    </Container>
  );
};

export default CartListItem;
