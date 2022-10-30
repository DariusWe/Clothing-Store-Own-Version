import { Container, Counter } from "./shopping-icon.styles";
import { toggleCart, selectCartQuantity } from "../../store/cart.slice";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";

const ShoppingIcon = () => {
  console.log("ShoppingIcon");
  const cartQuantity = useTypedSelector(selectCartQuantity);
  const dispatch = useTypedDispatch();

  return (
    <Container onClick={() => dispatch(toggleCart())}>
      <i className="fa-solid fa-cart-shopping" />
      <Counter>{cartQuantity}</Counter>
    </Container>
  );
};

export default ShoppingIcon;
