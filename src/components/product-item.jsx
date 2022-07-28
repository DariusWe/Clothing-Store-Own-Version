import "./product-item.scss";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

const ProductItem = ({ product }) => {
  const { addToShoppingCart } = useContext(ShoppingCartContext);

  return (
    <div className="product-item-container">
      <div className="product-item-img">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-item-info">
        <div className="product-item-info-left">
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </div>
        <div className="product-item-info-right" onClick={() => {addToShoppingCart(product)}}>
          <span>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
