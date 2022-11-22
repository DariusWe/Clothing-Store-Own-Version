import { SideBarContainer, GenderLink, CategoriesList, LoadingSpinnerNavbar } from "./navbar-side.styles";
import { useTypedSelector } from "../../store/typed-hooks";
import { Logo, NavbarSideLink } from "../index";
import { useLocation } from "react-router-dom";

const NavbarSide = () => {
  console.log("NavbarSide");
  const womenCategories = useTypedSelector((state) => state.products.womenCategories);
  const menCategories = useTypedSelector((state) => state.products.menCategories);
  const ProductsLoading = useTypedSelector((state) => state.products.isLoading);
  const urlPath = useLocation().pathname;

  return (
    <SideBarContainer>
      <Logo />
      {urlPath.includes("/women") || urlPath.includes("/men") ? (
        <>
          <div>
            <GenderLink to="/women" $fontWeight={urlPath.includes("/women") ? "800" : "400"}>
              Women
            </GenderLink>
            <GenderLink to="/men" $fontWeight={urlPath.includes("/men") ? "800" : "400"}>
              Men
            </GenderLink>
          </div>
          {ProductsLoading ? (
            <LoadingSpinnerNavbar />
          ) : (
            <CategoriesList>
              {urlPath.includes("/women")
                ? womenCategories.map((category) => <NavbarSideLink key={category.id} category={category} />)
                : menCategories.map((category) => <NavbarSideLink key={category.id} category={category} />)}
            </CategoriesList>
          )}
        </>
      ) : null}
    </SideBarContainer>
  );
};

export default NavbarSide;
