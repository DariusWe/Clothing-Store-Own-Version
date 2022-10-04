import { Container, Counter } from "./shopping-icon.styles";
import { toggleCart, selectCartQuantity } from "../store/cart.slice";
import { useDispatch, useSelector } from "react-redux";

const ShoppingIcon = () => {
  console.log("Render/Rerender of ShoppingIcon");
  const cartQuantity = useSelector(selectCartQuantity);
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(toggleCart())}>
      <i className="fa-solid fa-cart-shopping" />
      <Counter>{cartQuantity}</Counter>
    </Container>
  );
};

export default ShoppingIcon;
