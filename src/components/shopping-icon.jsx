import { Container, Counter } from "./shopping-icon.styles";
import { toggleIsCartOpen } from "../store/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCartQuantity } from "../store/cart/cart.selectors";

const ShoppingIcon = () => {
  console.log("Render/Rerender of ShoppingIcon");
  const cartQuantity = useSelector(selectCartQuantity);
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(toggleIsCartOpen())}>
      <i className="fa-solid fa-cart-shopping" />
      <Counter>{cartQuantity}</Counter>
    </Container>
  );
};

export default ShoppingIcon;
