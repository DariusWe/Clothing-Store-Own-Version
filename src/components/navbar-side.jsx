import { SideBarContainer, GenderLink, CategoriesList } from "./navbar-side.styles";
import { useSelector } from "react-redux";
import Logo from "./logo";
import NavbarLink from "./navbar-link";

const NavbarSide = () => {
  console.log("Render/Rerender of NavbarSide");
  const womenCategories = useSelector((state) => state.products.womenCategories);
  const menCategories = useSelector((state) => state.products.menCategories);
  const currLocation = useSelector((state) => state.userLocation.userLocation);

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
          <CategoriesList>
            {currLocation === "women"
              ? womenCategories.map((category) => <NavbarLink key={category.id} category={category} />)
              : menCategories.map((category) => <NavbarLink key={category.id} category={category} />)}
          </CategoriesList>
        </>
      ) : null}
    </SideBarContainer>
  );
};

export default NavbarSide;
