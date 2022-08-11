import "./women-page.scss";
import { Link } from "react-router-dom";

const WomenPage = () => {
  return (
    <div className="women-page-container">
      <div className="left-section">
        <img src={require("../assets/pink4.jpg")} alt="New Spring Collection" />
        <img src={require("../assets/pink1.jpg")} alt="New Spring Collection" />
      </div>
      <div className="right-section">
        {/* <img src={require("../assets/black_blazer.jpg")} /> */}
        <div className="collection-info">
          <h2>Spring Collection</h2>
          <span>Designed by Max Mustermann</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis blandit bibendum. Ut ac elit at
            nunc porta imperdiet. Nulla rutrum velit at dolor iaculis efficitur. Sed sit amet porta magna. Maecenas eu
            ipsum eu mi ornare maximus nec at lorem. Phasellus non maximus enim. Nullam congue suscipit condimentum.
            Aliquam non mauris nunc.
          </p>
          <Link to="/">
            <p className="link">&rarr; View Collection</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WomenPage;
