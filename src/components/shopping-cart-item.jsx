import "./shopping-cart-item.scss";

const ShoppingCartItem = ({ product }) => {
  return (
    <div className="shopping-cart-item-container">
      <div className="shopping-cart-item-img-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="shopping-cart-item-info">
        <span>{product.name}</span>
        <span>{product.quantity} x {`€${product.price}`}</span>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
