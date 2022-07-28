import "./category-item.scss";
import { useNavigate } from "react-router-dom";

const ShopItem = ({ label, imgUrl }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-item-container" style={{ backgroundImage: `url(${imgUrl})` }} onClick={() => navigate(`/shop/${label.toLowerCase()}`)}>
      <span className="shop-item-label">
        <h3>{label}</h3>
      </span>
    </div>
  );
};

export default ShopItem;
