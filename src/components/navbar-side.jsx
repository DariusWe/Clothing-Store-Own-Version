import { SideBarContainer, GenderLink, CategoriesList } from "./navbar-side.styles";
import Logo from "./logo";
import NavbarLink from "./navbar-link";
import { useSelector } from "react-redux";
import { selectCurrLocation } from "../store/curr-user-location/curr-userl-location.selectors";
import { selectWomenProducts, selectMenProducts } from "../store/products/products.selectors";

const NavbarSide = () => {
  console.log("Render/Rerender of NavbarSide");
  const womenProducts = useSelector(selectWomenProducts);
  const menProducts = useSelector(selectMenProducts);
  const currLocation = useSelector(selectCurrLocation);

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
              ? womenProducts.map((category) => <NavbarLink key={category.id} category={category} />)
              : menProducts.map((category) => <NavbarLink key={category.id} category={category} />)}
          </CategoriesList>
        </>
      ) : null}
    </SideBarContainer>
  );
};

export default NavbarSide;
