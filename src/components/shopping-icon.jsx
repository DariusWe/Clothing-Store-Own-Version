import {Container, Counter} from "./shopping-icon.styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

const ShoppingIcon = () => {
    const {shoppingCartIsOpen, setShoppingCartIsOpen, totalQuantity} = useContext(ShoppingCartContext);

    return (
        <Container onClick={() => shoppingCartIsOpen ? setShoppingCartIsOpen(false) : setShoppingCartIsOpen(true)}>
            <i className="fa-solid fa-cart-shopping" />
            <Counter>{totalQuantity}</Counter>
        </Container>
    );
}

export default ShoppingIcon;