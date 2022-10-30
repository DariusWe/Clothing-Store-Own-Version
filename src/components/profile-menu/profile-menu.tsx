import { Container } from "./profile-menu.styles";
import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { toggleProfileMenu } from "../../store/user.slice";
import { signOutUser } from "../../utils/firebase";
import SlideMenu from "../slide-menu/slide-menu";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  console.log("ProfileMenu");
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    signOutUser().then(() => {
      dispatch(toggleProfileMenu());
      navigate("/");
    });
  };

  return (
    <SlideMenu context="profile-menu" width="18vw">
      <Container>
        {currentUser ? (
          <div>
            <h3>{currentUser.displayName}</h3>
            <span>Lorem Ipsum</span>
            <span>Dolor</span>
            <span>Sit Amet</span>
            <span>Consectetur</span>
            <span onClick={signOut}>Logout</span>
          </div>
        ) : null}
      </Container>
    </SlideMenu>
  );
};

export default ProfileMenu;
