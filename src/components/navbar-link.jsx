import { NavLink } from "./navbar-link.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GenderInUrlContext } from "../contexts/genderInUrlContext";

const NavbarLink = ({ category }) => {
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const location = useLocation();
  const gender = useContext(GenderInUrlContext);

  return (
    <NavLink isActive={location.pathname.includes(titleSanitized) ? true : false} onClick={() => navigate(`/${gender}/${titleSanitized}`)}>
      {title}
    </NavLink>
  );
};

export default NavbarLink;
