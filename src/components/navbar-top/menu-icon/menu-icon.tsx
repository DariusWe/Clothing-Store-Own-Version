import { HamburgerIcon } from "./menu-icon.styles";
import { useTypedDispatch } from "../../../store/typed-hooks";
import { toggleNavbarSideMobile } from "../../../store/slices/navbar-side-mobile.slice";

const MenuIcon = () => {
  const dispatch = useTypedDispatch();
  return <HamburgerIcon className="fa-solid fa-bars" onClick={() => dispatch(toggleNavbarSideMobile())} />;
};

export default MenuIcon;
