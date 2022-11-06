import { SideBarContainer, GenderLink, CategoriesList, LoadingSpinnerNavbar } from "./navbar-side.styles";
import { useTypedSelector } from "../../store/hooks";
import Logo from "../logo/logo";
import NavbarSideLink from "../navbar-side-link/navbar-side-link";
import { URL_LOCATION } from "../../constants/URL_LOCATIONS";

const NavbarSide = () => {
  console.log("NavbarSide");
  const womenCategories = useTypedSelector((state) => state.products.womenCategories);
  const menCategories = useTypedSelector((state) => state.products.menCategories);
  const currLocation = useTypedSelector((state) => state.userLocation.userLocation);
  const ProductsLoading = useTypedSelector((state) => state.products.isLoading);

  return (
    <SideBarContainer>
      <Logo />
      {currLocation === URL_LOCATION.WOMEN || currLocation === URL_LOCATION.MEN ? (
        <>
          <div>
            <GenderLink to="/women" fontWeight={currLocation === URL_LOCATION.WOMEN ? "800" : "400"}>
              Women
            </GenderLink>
            <GenderLink to="/men" fontWeight={currLocation === URL_LOCATION.MEN ? "800" : "400"}>
              Men
            </GenderLink>
          </div>
          {ProductsLoading ? (
            <LoadingSpinnerNavbar />
          ) : (
            <CategoriesList>
              {currLocation === URL_LOCATION.WOMEN
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
