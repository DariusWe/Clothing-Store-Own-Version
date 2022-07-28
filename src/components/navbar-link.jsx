import "./navbar-link.scss";
import { useNavigate } from "react-router-dom";

const NavbarLink = ({title, sex}) => {
    const navigate = useNavigate();
    return (
        <span className="navbar-second-link" onClick={() => navigate(`/${sex}/${title}`)}>{title}</span>
    );
}

export default NavbarLink;

// onClick={() => navigate("/women/dresses")}