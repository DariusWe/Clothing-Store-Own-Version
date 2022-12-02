import { Container } from "./profile-menu.styles";
import { useTypedSelector, useTypedDispatch } from "../../store/typed-hooks";
import { toggleProfileMenu } from "../../store/slices/user.slice";
import { signOutUser } from "../../utils/firebase.utils";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
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
  );
};

export default ProfileMenu;
