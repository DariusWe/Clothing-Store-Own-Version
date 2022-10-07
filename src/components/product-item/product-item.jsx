import { Container, BottomSection, ProductInfo, AddButton } from "./product-item.styles";
import { addItemToCart } from "../../store/cart.slice";
import { useDispatch } from "react-redux";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <img src={product.imageUrl} alt={product.name} />
      <BottomSection>
        <ProductInfo>
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </ProductInfo>
        <AddButton onClick={() => dispatch(addItemToCart(product))}>
          <span>+</span>
        </AddButton>
      </BottomSection>
    </Container>
  );
};

export default ProductItem;
