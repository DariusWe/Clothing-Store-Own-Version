import { NavLink } from "./navbar-side-link.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks";
import type { Category } from "../../store/products.slice";

type NavBarSideLinkProps = {
  category: Category;
};

const NavbarSideLink: React.FC<NavBarSideLinkProps> = ({ category }) => {
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const location = useLocation();
  const urlGender = useTypedSelector((state) => state.userLocation.userLocation);

  return (
    <NavLink
      isActive={location.pathname.includes(titleSanitized) ? true : false}
      onClick={() => navigate(`/${urlGender}/${titleSanitized}`)}
    >
      {title}
    </NavLink>
  );
};

export default NavbarSideLink;
