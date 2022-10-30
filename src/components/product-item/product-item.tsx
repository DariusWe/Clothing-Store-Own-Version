import { Container, BottomSection, ProductInfo, AddButton } from "./product-item.styles";
import { addItemToCart } from "../../store/cart.slice";
import { useTypedDispatch } from "../../store/hooks";
import type { Item } from "../../store/products.slice";

type ProductItemProps = {
  product: Item,
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  console.log("ProductItem");
  const dispatch = useTypedDispatch();

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
