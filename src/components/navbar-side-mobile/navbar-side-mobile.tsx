import { Container, GenderLink, CategoriesList, NavItem } from "./navbar-side-mobile.styles";
import { useTypedSelector, useTypedDispatch } from "../../store/typed-hooks";
import { URL_LOCATION } from "../../store/slices/user-location.slice";
import { toggleNavbarSideMobile } from "../../store/slices/navbar-side-mobile.slice";
import { useLocation } from "react-router-dom";

const NavbarSideMobile = () => {
  console.log("NavbarSideMobile");
  const dispatch = useTypedDispatch();
  const womenCategories = useTypedSelector((state) => state.products.womenCategories);
  const menCategories = useTypedSelector((state) => state.products.menCategories);
  const currentLocation = useTypedSelector((state) => state.userLocation.userLocation);
  const urlPath = useLocation().pathname;

  return (
    <Container>
      <GenderLink to="/women" fontWeight={currentLocation === URL_LOCATION.WOMEN ? "800" : "400"}>
        Women
      </GenderLink>
      <GenderLink to="/men" fontWeight={currentLocation === URL_LOCATION.MEN ? "800" : "400"}>
        Men
      </GenderLink>
      <CategoriesList>
        {currentLocation === URL_LOCATION.WOMEN
          ? womenCategories.map((category) => (
              <NavItem
                key={category.id}
                to={`/${currentLocation}/${category.titleSanitized}`}
                onClick={() => dispatch(toggleNavbarSideMobile())}
                $isActive={urlPath.includes(category.titleSanitized) ? true : false}
              >
                <span>{category.title}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </NavItem>
            ))
          : menCategories.map((category) => (
              <NavItem
                key={category.id}
                to={`/${currentLocation}/${category.titleSanitized}`}
                onClick={() => dispatch(toggleNavbarSideMobile())}
                $isActive={urlPath.includes(category.titleSanitized) ? true : false}
              >
                {category.title}
              </NavItem>
            ))}
      </CategoriesList>
    </Container>
  );
};

export default NavbarSideMobile;
