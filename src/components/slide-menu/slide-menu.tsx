import { Container, DeleteBtn } from "./slide-menu.styles";
import { useRef, useEffect } from "react";
import { useTypedDispatch } from "../../store/hooks";
import { toggleCart } from "../../store/cart.slice";
import { toggleProfileMenu } from "../../store/user.slice";
import { toggleFavouritesMenu } from "../../store/favourites.slice";

// This wrapper component is designed to be reused for different contexts. It renders a blank slide menu with a closing button.
// The context has to be passed as a string. It is needed for the closeSlideMenu() function (see down below)

type SlideMenuProps = {
  children: React.ReactNode,
  context: "cart" | "profile-menu" | "favourites";
  width?: string;
};

const SlideMenu: React.FC<SlideMenuProps> = ({ children, context, width }) => {
  console.log("SlideMenu");
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useTypedDispatch();

  ///////////// Outside-click-handler:

  useEffect(() => {
    document.addEventListener("mousedown", checkClickLocation);
    return () => {
      document.removeEventListener("mousedown", checkClickLocation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Typing checkClickLocation like below correct? 

  const checkClickLocation = (e: MouseEvent) => {
    if (e.target instanceof Node) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeSlideMenu();
      }
    }
  };

  const closeSlideMenu = () => {
    context === "cart" && dispatch(toggleCart());
    context === "profile-menu" && dispatch(toggleProfileMenu());
    context === "favourites" && dispatch(toggleFavouritesMenu());
  };

  /////////////

  return (
    <Container ref={menuRef} style={{ width: width }}>
      <DeleteBtn className="fa-solid fa-xmark" onClick={closeSlideMenu}></DeleteBtn>
      {children}
    </Container>
  );
};

export default SlideMenu;
