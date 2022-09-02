import { Container } from "./profile-popup.styles";
import Button from "./button";
import { signOutUser } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { USER_ACTION_TYPES } from "../store/user/user.types";

const ProfilePopup = () => {
  console.log("Render/Rerender of ProfilePopup");
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const signOut = () => {
    signOutUser().then(() => {
      dispatch({ type: USER_ACTION_TYPES.TOGGLE_PROFILE_MENU });
    });
  };

  return (
    <Container>
      {currentUser ? (
        <div>
          <span>Signed in as: {currentUser.displayName}</span>
          <span>Email: {currentUser.email}</span>
          <Button value="Sign Out" onClick={signOut} />
        </div>
      ) : null}
    </Container>
  );
};

export default ProfilePopup;
