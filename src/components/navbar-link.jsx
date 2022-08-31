import { NavLink } from "./navbar-link.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CurrentGenderContext } from "../contexts/currentGenderContext";

const NavbarLink = ({ category }) => {
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const location = useLocation();
  const currentGender = useContext(CurrentGenderContext);

  return (
    <NavLink isActive={location.pathname.includes(titleSanitized) ? true : false} onClick={() => navigate(`/${currentGender}/${titleSanitized}`)}>
      {title}
    </NavLink>
  );
};

export default NavbarLink;
