import { SideBarContainer, GenderLink, CategoriesList } from "./navbar-side.styles";
import { useLocation } from "react-router-dom";
import Logo from "./logo";
import NavbarLink from "./navbar-link";
import { useSelector } from "react-redux";

const NavbarSide = () => {
  const womenProducts = useSelector(state => state.products.womenProducts);
  const menProducts = useSelector(state => state.products.menProducts);
  const pathname = useLocation().pathname;

  return (
    <SideBarContainer>
      <Logo />
      {pathname === "/" || pathname.includes("/men") || pathname.includes("/women") ? (
        <>
          <div>
            <GenderLink to="/women" fontWeight={pathname.includes("/women") || pathname === "/" ? "800" : "400"}>
              Women
            </GenderLink>
            <GenderLink to="/men" fontWeight={pathname.includes("/men") ? "800" : "400"}>
              Men
            </GenderLink>
          </div>
          <CategoriesList>
            {pathname.includes("/men")
              ? menProducts.map((category) => <NavbarLink key={category.id} category={category} />)
              : womenProducts.map((category) => <NavbarLink key={category.id} category={category} />)}
          </CategoriesList>
        </>
      ) : null}
    </SideBarContainer>
  );
};

export default NavbarSide;