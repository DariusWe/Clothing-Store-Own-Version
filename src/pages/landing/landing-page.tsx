import {
  ContainerDesktop,
  LeftSection,
  CSSBackgroundImage,
  RightSection,
  LinkToCollection,
  ContainerMobile,
  ContentMobile,
  StyledButton
} from "./landing-page.styles";
import { Link, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../store/typed-hooks";
import { URL_LOCATION } from "../../store/slices/user-location.slice";
import { VIEWPORT_TYPES } from "../../store/slices/current-viewport.slice";

const LandingPage = () => {
  console.log("LandingPage");
  const navigate = useNavigate();
  const userLocation = useTypedSelector((state) => state.userLocation.userLocation);
  const currentViewport = useTypedSelector((state) => state.currentViewport.type);
  const currentLocationIsWomen = userLocation === URL_LOCATION.WOMEN;

  return currentViewport === VIEWPORT_TYPES.DESKTOP ? (
    <ContainerDesktop>
      <LeftSection>
        <CSSBackgroundImage src={currentLocationIsWomen ? "/product-images/index-women-1.jpg" : "/product-images/index-men-1.jpg"} />
        <CSSBackgroundImage src={currentLocationIsWomen ? "/product-images/index-women-2.jpg" : "/product-images/index-men-2.jpg"} />
      </LeftSection>
      <RightSection>
        <h2>{currentLocationIsWomen ? "Spring Collection" : "New Collection"}</h2>
        <span>Designed by Max Mustermann</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis blandit bibendum. Ut ac elit at nunc
          porta imperdiet. Nulla rutrum velit at dolor iaculis efficitur. Sed sit amet porta magna. Maecenas eu ipsum eu
          mi ornare maximus nec at lorem. Phasellus non maximus enim. Nullam congue suscipit condimentum. Aliquam non
          mauris nunc.
        </p>
        <Link to={currentLocationIsWomen ? "/women/blazers" : "/men/hoodies"}>
          <LinkToCollection>&rarr; {currentLocationIsWomen ? "Shop blazers" : "Shop Hoodies"}</LinkToCollection>
        </Link>
      </RightSection>
    </ContainerDesktop>
  ) : (
    <ContainerMobile>
      <ContentMobile userLocation={userLocation}>
        <h2>{currentLocationIsWomen ? "Spring Collection" : "New Collection"}</h2>
        <span>Designed by Max Mustermann</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis blandit bibendum. Ut ac elit at nunc
          porta imperdiet. Nulla rutrum velit at dolor iaculis efficitur. Sed sit amet porta magna. Maecenas eu ipsum eu
          mi ornare maximus nec at lorem. Phasellus non maximus enim. Nullam congue suscipit condimentum. Aliquam non
          mauris nunc.
        </p>
        <StyledButton
          label={currentLocationIsWomen ? "Shop Blazers" : "Shop Hoodies"}
          buttonTheme="lightBorderless"
          onClick={() => (currentLocationIsWomen ? navigate("/women/blazers") : navigate("/men/hoodies"))}
        />
      </ContentMobile>
    </ContainerMobile>
  );
};

export default LandingPage;
