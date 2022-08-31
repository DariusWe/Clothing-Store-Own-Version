import { NavLink } from "./navbar-link.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarLink = ({ category }) => {
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const location = useLocation();
  const urlGender = useSelector(state => state.url.urlGender);

  return (
    <NavLink isActive={location.pathname.includes(titleSanitized) ? true : false} onClick={() => navigate(`/${urlGender}/${titleSanitized}`)}>
      {title}
    </NavLink>
  );
};

export default NavbarLink;
