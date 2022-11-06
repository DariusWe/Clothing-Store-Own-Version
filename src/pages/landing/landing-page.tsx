import { Container, LeftSection, RightSection, LinkToCollection } from "./landing-page.styles";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../store/hooks";
import { URL_LOCATION } from "../../constants/URL_LOCATIONS";

const LandingPage = () => {
  console.log("LandingPage");
  const userLocation = useTypedSelector((state) => state.userLocation.userLocation);
  return userLocation === URL_LOCATION.WOMEN ? (
    <Container>
      <LeftSection>
        <img src={require("../../assets/green1.jpg")} alt="New Spring Collection" />
        <img src={require("../../assets/white.jpg")} alt="New Spring Collection" />
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
  ) : (
    <Container>
      <LeftSection>
        <img src={require("../../assets/index-men-2(1).jpg")} alt="New Men Collection" />
        <img src={require("../../assets/index-men-2(2).jpg")} alt="New Men Collection" />
      </LeftSection>
      <RightSection>
        <h2>New Collection</h2>
        <span>Designed by Max Mustermann</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis blandit bibendum. Ut ac elit at nunc
          porta imperdiet. Nulla rutrum velit at dolor iaculis efficitur. Sed sit amet porta magna. Maecenas eu ipsum eu
          mi ornare maximus nec at lorem. Phasellus non maximus enim. Nullam congue suscipit condimentum. Aliquam non
          mauris nunc.
        </p>
        <Link to="/men/hoodies">
          <LinkToCollection>&rarr; Shop Hoodies</LinkToCollection>
        </Link>
      </RightSection>
    </Container>
  );
};

export default LandingPage;
