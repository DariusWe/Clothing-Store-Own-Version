import "./category-page.scss";
import { useParams } from "react-router-dom";
import ProductItem from "../components/product-item";
import { useContext } from "react";
import { ProductContext } from "../contexts/productsContext";
import { useState } from "react";

const CategoryPage = () => {
  const params = useParams();
  const shopData = useContext(ProductContext);
  const categoryProducts = [];
  /*
    Whats happening here? Filter shopData to only have one object: The products of the presented category. Then, acces this one object
    via "[0]" and just take it's items. PreviewImage, title etc not needed.
    */
  if (shopData.length > 0) {
    const tmpArr = shopData.filter((category) => category.title.toLowerCase() === params.label.toLowerCase())[0].items;
    categoryProducts.push(...tmpArr);
  }

  return (
    <div>
      <h1 className="category-title">{params.label.charAt(0).toUpperCase() + params.label.slice(1)}</h1>
      <div>Filter Section</div>
      <div className="products-container">
        {categoryProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
