import { Container } from "./profile-popup.styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleProfileMenu } from "../store/user/user.actions";
import { selectCurrentUser } from "../store/user/user.selectors";
import { signOutUser } from "../utils/firebase";
import Button from "./button";

const ProfilePopup = () => {
  console.log("Render/Rerender of ProfilePopup");
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const signOut = () => {
    signOutUser().then(() => {
      dispatch(toggleProfileMenu());
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
