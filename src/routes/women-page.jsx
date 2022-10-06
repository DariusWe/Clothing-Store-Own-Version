import { Container, LeftSection, RightSection, LinkToCollection } from "./women-page.styles";
import { Link } from "react-router-dom";

const WomenPage = () => {
  console.log("Render/Rerender of WomenPage");
  return (
    <Container>
      <LeftSection>
        <img src={require("../assets/pink4.jpg")} alt="New Spring Collection" />
        <img src={require("../assets/pink1.jpg")} alt="New Spring Collection" />
      </LeftSection>
      <RightSection>
        <h2>Spring Collection</h2>
        <span>Designed by Max Mustermann</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis blandit bibendum. Ut ac elit at nunc
          porta imperdiet. Nulla rutrum velit at dolor iaculis efficitur. Sed sit amet porta magna. Maecenas eu ipsum eu
          mi ornare maximus nec at lorem. Phasellus non maximus enim. Nullam congue suscipit condimentum. Aliquam non
          mauris nunc.
        </p>
        <Link to="/women/blazers">
          <LinkToCollection>&rarr; Shop blazers</LinkToCollection>
        </Link>
      </RightSection>
    </Container>
  );
};

export default WomenPage;
