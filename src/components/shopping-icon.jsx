import { Container, Counter } from "./shopping-icon.styles";
import { toggleIsCartOpen } from "../store/cart/cart-helpers";
import { useDispatch, useSelector } from "react-redux";

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
