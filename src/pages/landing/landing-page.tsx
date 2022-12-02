import {
  ContainerDesktop,
  ImageSection,
  CSSBackgroundImage,
  Description,
  LinkToCollection,
  ContainerMobile,
  StyledButton,
} from "./landing-page.styles";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../store/typed-hooks";
import { VIEWPORT_TYPES } from "../../store/slices/current-viewport.slice";

const LandingPage = () => {
  const [currentLocationIsWomen, setCurrentLocationIsWomen] = useState(true);
  const navigate = useNavigate();
  const urlPath = useLocation().pathname;
  const currentViewport = useTypedSelector((state) => state.currentViewport.type);

  useEffect(() => {
    urlPath.includes("/women") ? setCurrentLocationIsWomen(true) : setCurrentLocationIsWomen(false);
  }, [urlPath]);
  /* 
  Some notes on using useEffect vs running code directly in the component: 
    - Code inside useEffect will only rerun when dependency value changes. It won't run when component rerenders because of 
      parent component rerendering.
    - Disadvantage: useEffect runs after render, so component will get rendered twice. When running code directly in component, 
      component would only run once.
  */
  /*
  Some notes on using "currentLocationIsWomen" vs using "urlPath.includes("/women")":
    - Second option would have to be calculated 7 times on each rerender.
    - With useEffect and useState we have more code, but could still be better performance wise. 
 */

  return currentViewport === VIEWPORT_TYPES.DESKTOP ? (
    <ContainerDesktop>
      <ImageSection>
        <CSSBackgroundImage
          $src={currentLocationIsWomen ? "/product-images/index-women-1.jpg" : "/product-images/index-men-1.jpg"}
        />
        <CSSBackgroundImage
          $src={currentLocationIsWomen ? "/product-images/index-women-2.jpg" : "/product-images/index-men-2.jpg"}
        />
      </ImageSection>
      <Description>
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
      </Description>
    </ContainerDesktop>
  ) : (
    <ContainerMobile $currentLocationIsWomen={currentLocationIsWomen}>
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
    </ContainerMobile>
  );
};

export default LandingPage;
