import { Container } from "./cart.styles";
import { CartItemList, CartBottomSection } from "../index";

const Cart = () => {
  return (
    <Container>
      <CartItemList />
      <CartBottomSection />
    </Container>
  );
};

export default Cart;
