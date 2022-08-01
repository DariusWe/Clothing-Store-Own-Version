import "./products-page.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopProductsContext } from "../contexts/shopProductsContext";
import ProductItem from "../components/product-item";
import FilterSection from "../components/filter-section";

const ProductsPage = () => {
  const params = useParams();
  const categoryProducts = [];
  const { womenProducts, menProducts } = useContext(ShopProductsContext);

  // Depending on the URL, push women or men categories into the categorie variable. Delete spaces of category, as URL spaces are also stripped.
  if (params.sex === "women" && womenProducts.length > 0) {
    const productArr = womenProducts.filter((category) => category.titleSanitized === params.category)[0].items;
    categoryProducts.push(...productArr);
  } else if (menProducts.length > 0) {
    const productArr = menProducts.filter((category) => category.titleSanitized === params.category)[0].items;
    categoryProducts.push(...productArr);
  }

  return (
    <div className="products-page-container">
      <h1 className="products-page-title">{params.category.replace("&", " & ")}</h1>
      <p className="products-page-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis blandit bibendum. Ut ac elit at nunc porta imperdiet. Nulla rutrum velit at dolor iaculis efficitur. Sed sit amet porta magna. Maecenas eu ipsum eu mi ornare maximus nec at lorem. Phasellus non maximus enim. Nullam congue suscipit condimentum. Aliquam non mauris nunc.</p>
      <FilterSection />
      <div className="products-container">
        {categoryProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
