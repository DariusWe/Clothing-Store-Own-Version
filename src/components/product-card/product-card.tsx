import { Container, BottomSection, ProductInfo, ImagePlaceholder } from "./product-card.styles";
import { useNavigate, useParams } from "react-router-dom";
import { Button, HeartIconProductCard } from "../index";
import { addItemToCart, toggleCart } from "../../store/slices/cart.slice";
import { useTypedDispatch } from "../../store/typed-hooks";
import type { Item } from "../../store/slices/products.slice";

type ProductCardProps = {
  product: Item;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { gender, category } = useParams();
  const dispatch = useTypedDispatch();

  return (
    <Container>
      <ImagePlaceholder>
        <img
          src={product.imageUrl}
          alt={product.name}
          // onClick={() => navigate(`/${gender}/${category}/product#id=${product.id}`)}
        />
      </ImagePlaceholder>
      <HeartIconProductCard product={product} />
      <BottomSection>
        <ProductInfo onClick={() => navigate(`/${gender}/${category}/product#id=${product.id}`)}>
          <span>{product.name}</span>
          <span>{`${product.price} €`}</span>
        </ProductInfo>
        <Button
          label="ADD TO BAG"
          buttonTheme="light"
          onClick={() => {
            dispatch(addItemToCart(product));
            dispatch(toggleCart());
          }}
        />
      </BottomSection>
    </Container>
  );
};

export default ProductCard;
