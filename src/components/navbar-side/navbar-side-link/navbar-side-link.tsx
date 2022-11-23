import { NavLink } from "./navbar-side-link.styles";
import { useNavigate, useLocation } from "react-router-dom";
import type { Category } from "../../../store/slices/products.slice";

type NavBarSideLinkProps = {
  category: Category;
  className?: string; 
  // className prop is always needed for components that get referenced via styled(). Here, NavbarSideLink is referenced in navbar-side-mobile.styles. 
};

const NavbarSideLink: React.FC<NavBarSideLinkProps> = ({ category, className }) => {
  console.log("NavbarSideLink");
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const urlPath = useLocation().pathname;
  const urlGender = urlPath.includes("/women") ? "women" : "men";

  return (
    <NavLink
      className={className}
      $isActive={urlPath.includes(titleSanitized) ? true : false}
      onClick={() => navigate(`/${urlGender}/${titleSanitized}`)}
    >
      {title}
    </NavLink>
  );
};

export default NavbarSideLink;
