import "./shop-page.scss";
import ShopItem from "../components/category-item";
import { useContext } from "react";
import { ProductContext } from "../contexts/productsContext";

const ShopPage = () => {
  const shopData = useContext(ProductContext);

  return (
    <div className="shop-page-container">
      {shopData.map((category) => {
        return <ShopItem key={category.id} label={category.title} imgUrl={category.previewImg} />;
      })}
    </div>
  );
};

export default ShopPage;