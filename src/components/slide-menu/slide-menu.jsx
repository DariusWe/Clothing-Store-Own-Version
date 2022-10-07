import { Container } from "./slide-menu.styles";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../store/cart.slice";
import { toggleProfileMenu } from "../../store/user.slice";

// This wrapper component is designed to be reused for different contexts. It renders a blank slide menu with a closing button.
// The context has to be passed as a string. It is needed for the closeSlideMenu() function (see down below)

const SlideMenu = ({ children, context, width }) => {
  const menuRef = useRef();
  const dispatch = useDispatch();

  ///////////// Outside-click-handler:

  useEffect(() => {
    document.addEventListener("mousedown", checkClickLocation);
    return () => {
      document.removeEventListener("mousedown", checkClickLocation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkClickLocation = (e) => {
    if (!menuRef.current.contains(e.target)) {
      closeSlideMenu();
    }
  };

  const closeSlideMenu = () => {
    context === "cart" && dispatch(toggleCart());
    context === "profile-menu" && dispatch(toggleProfileMenu());
  };

  /////////////

  return (
    <Container ref={menuRef} style={{width: width}}>
      <i className="fa-solid fa-xmark" onClick={closeSlideMenu}></i>
      {children}
    </Container>
  );
};

export default SlideMenu;
