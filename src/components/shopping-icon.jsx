import "./shopping-icon.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

const ShoppingIcon = () => {
    const {shoppingCartIsOpen, setShoppingCartIsOpen, quantity} = useContext(ShoppingCartContext);

    return (
        <div className="shopping-icon-container" onClick={() => shoppingCartIsOpen ? setShoppingCartIsOpen(false) : setShoppingCartIsOpen(true)}>
            <i className="fa-solid fa-cart-shopping" />
            <span className="shopping-icon-counter">{quantity}</span>
        </div>
    );
}

export default ShoppingIcon;