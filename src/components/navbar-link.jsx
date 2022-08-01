import "./navbar-link.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { GenderInUrlContext } from "../contexts/genderInUrlContext";

const NavbarLink = ({ category }) => {
  const { title, titleSanitized } = category;
  const navigate = useNavigate();
  const location = useLocation();
  const gender = useContext(GenderInUrlContext);

  return (
    <span
      className={location.pathname.includes(titleSanitized) ? "navbar-second-link is-active" : "navbar-second-link"}
      onClick={() => navigate(`/${gender}/${titleSanitized}`)}
    >
      {title}
    </span>
  );
};

export default NavbarLink;
