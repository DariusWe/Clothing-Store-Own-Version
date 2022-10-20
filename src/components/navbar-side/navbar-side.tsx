import { SideBarContainer, GenderLink, CategoriesList, LoadingSpinnerNavbar } from "./navbar-side.styles";
import { useTypedSelector } from "../../hooks";
import Logo from "../logo/logo";
import NavbarSideLink from "../navbar-side-link/navbar-side-link";

const NavbarSide = () => {
  const womenCategories = useTypedSelector((state) => state.products.womenCategories);
  const menCategories = useTypedSelector((state) => state.products.menCategories);
  const currLocation = useTypedSelector((state) => state.userLocation.userLocation);
  const ProductsLoading = useTypedSelector((state) => state.products.isLoading);

  return (
    <SideBarContainer>
      <Logo />
      {currLocation === "women" || currLocation === "men" ? (
        <>
          <div>
            <GenderLink to="/women" fontWeight={currLocation === "women" ? "800" : "400"}>
              Women
            </GenderLink>
            <GenderLink to="/men" fontWeight={currLocation === "men" ? "800" : "400"}>
              Men
            </GenderLink>
          </div>
          {ProductsLoading ? (
            <LoadingSpinnerNavbar />
          ) : (
            <CategoriesList>
              {currLocation === "women"
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
