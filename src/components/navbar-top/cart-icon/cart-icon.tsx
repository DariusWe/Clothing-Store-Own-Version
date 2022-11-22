import { Container, Counter } from "./cart-icon.styles";
import { toggleCart, selectCartQuantity } from "../../../store/slices/cart.slice";
import { useTypedSelector, useTypedDispatch } from "../../../store/typed-hooks";

const CartIcon = () => {
  const cartQuantity = useTypedSelector(selectCartQuantity);
  const dispatch = useTypedDispatch();

  return (
    <Container onClick={() => dispatch(toggleCart())}>
      <i className="fa-solid fa-cart-shopping" />
      <Counter>{cartQuantity}</Counter>
    </Container>
  );
};

export default CartIcon;
