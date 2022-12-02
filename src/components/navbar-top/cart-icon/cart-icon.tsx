import React from "react";
import { Container, Counter } from "./cart-icon.styles";
import { toggleCart, selectCartQuantity } from "../../../store/slices/cart.slice";
import { useTypedSelector, useTypedDispatch } from "../../../store/typed-hooks";

type CartIconProps = {
  theme: "dark" | "light";
  // Reason for using strings instead of enum here see button.tsx
};

const CartIcon: React.FC<CartIconProps> = ({ theme }) => {
  const cartQuantity = useTypedSelector(selectCartQuantity);
  const dispatch = useTypedDispatch();

  return (
    <Container onClick={() => dispatch(toggleCart())}>
      <i className="fa-solid fa-cart-shopping" />
      <Counter $theme={theme}>{cartQuantity}</Counter>
    </Container>
  );
};

export default CartIcon;
