import { Container, Counter } from "./shopping-icon.styles";
import { toggleIsCartOpen } from "../store/cart/cart-helpers";
import { useDispatch } from "react-redux/es/hooks/useDispatch"; // wtf is this path?
import { useSelector } from "react-redux/es/hooks/useSelector"; // wtf is this path?

const ShoppingIcon = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <Container onClick={() => dispatch(toggleIsCartOpen())}>
      <i className="fa-solid fa-cart-shopping" />
      <Counter>{totalQuantity}</Counter>
    </Container>
  );
};

export default ShoppingIcon;
