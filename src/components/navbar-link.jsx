import { NavLink } from "./navbar-link.styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrLocation } from "../store/curr-user-location/curr-userl-location.selectors";

const NavbarLink = ({ category }) => {
  console.log("Render/Rerender of NavbarLink");
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const location = useLocation();
  const urlGender = useSelector(selectCurrLocation);

  return (
    <NavLink isActive={location.pathname.includes(titleSanitized) ? true : false} onClick={() => navigate(`/${urlGender}/${titleSanitized}`)}>
      {title}
    </NavLink>
  );
};

export default NavbarLink;
