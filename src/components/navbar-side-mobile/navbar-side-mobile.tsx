import { Container, StyledLink, CategoriesList, CategoryLink } from "./navbar-side-mobile.styles";
import { useTypedSelector, useTypedDispatch } from "../../store/typed-hooks";
import { toggleNavbarSideMobile } from "../../store/slices/navbar-side-mobile.slice";
import { useLocation } from "react-router-dom";

const NavbarSideMobile = () => {
  const dispatch = useTypedDispatch();
  const womenCategories = useTypedSelector((state) => state.products.womenCategories);
  const menCategories = useTypedSelector((state) => state.products.menCategories);
  const urlPath = useLocation().pathname;
  const urlGender = urlPath.includes("/women") ? "women" : "men";

  return (
    <Container>
      <StyledLink to="/women" $fontWeight={urlGender === "women" ? "800" : "400"}>
        Women
      </StyledLink>
      <StyledLink to="/men" $fontWeight={urlGender === "men" ? "800" : "400"}>
        Men
      </StyledLink>
      <CategoriesList>
        {urlPath.includes("women")
          ? womenCategories.map((category) => (
              <CategoryLink
                key={category.id}
                to={`/${urlGender}/${category.titleSanitized}`}
                onClick={() => dispatch(toggleNavbarSideMobile())}
                $isActive={urlPath.includes(category.titleSanitized) ? true : false}
              >
                <span>{category.title}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </CategoryLink>
            ))
          : menCategories.map((category) => (
              <CategoryLink
                key={category.id}
                to={`/${urlGender}/${category.titleSanitized}`}
                onClick={() => dispatch(toggleNavbarSideMobile())}
                $isActive={urlPath.includes(category.titleSanitized) ? true : false}
              >
                <span>{category.title}</span>
                <i className="fa-solid fa-arrow-right"></i>
              </CategoryLink>
            ))}
      </CategoriesList>
    </Container>
  );
};

export default NavbarSideMobile;
