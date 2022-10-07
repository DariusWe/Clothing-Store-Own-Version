import { NavLink } from "./navbar-side-link.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarSideLink = ({ category }) => {
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const location = useLocation();
  const urlGender = useSelector((state) => state.userLocation.userLocation);

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
