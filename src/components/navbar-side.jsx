import { SideBarContainer, GenderLink, CategoriesList } from "./navbar-side.styles";
import { useLocation } from "react-router-dom";
import React, { useContext } from "react";
import { ShopProductsContext } from "../contexts/shopProductsContext";
import Logo from "./logo";
import NavbarLink from "./navbar-link";

const NavbarSide = () => {
  const { womenProducts, menProducts } = useContext(ShopProductsContext);
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