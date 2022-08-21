import { Container, BottomSection, ProductInfo, AddButton } from "./product-item.styles";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/shoppingCartContext";

const ProductItem = ({ product }) => {
  const { addToShoppingCart } = useContext(ShoppingCartContext);

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <BottomSection>
        <ProductInfo>
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </ProductInfo>
        <AddButton onClick={() => {addToShoppingCart(product)}}>
          <span>+</span>
        </AddButton>
      </BottomSection>
    </Container>
  );
};

export default ProductItem;
