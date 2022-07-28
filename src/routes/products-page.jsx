import "./products-page.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopProductsContext } from "../contexts/shopProductsContext";
import ProductItem from "../components/product-item";

const ProductsPage = () => {
  const params = useParams();
  const categoryProducts = [];
  const { womenProducts, menProducts } = useContext(ShopProductsContext);

  // Depending on the URL, push women or men categories into the categorie variable
  if (params.sex === "women") {
    const tmpArr = womenProducts.filter((category) => category.title.toLowerCase() === params.category.toLowerCase())[0]
      .items;
    categoryProducts.push(...tmpArr);
  } else {
    const tmpArr = menProducts.filter((category) => category.title.toLowerCase() === params.category.toLowerCase())[0]
      .items;
    categoryProducts.push(...tmpArr);
  }

  return (
    <div className="products-page-container">
      {categoryProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
