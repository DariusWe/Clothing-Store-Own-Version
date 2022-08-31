import { Container } from "./profile-popup.styles";
import Button from "./button";
import { useContext } from "react";
import { signOutUser } from "../utils/firebase";
import { ProfilePopupContext } from "../contexts/profilePopupContext";
import { useSelector } from "react-redux/es/exports";

const ProfilePopup = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { setProfilePopupIsOpen } = useContext(ProfilePopupContext);

  const signOut = () => {
    signOutUser().then(() => {
      setProfilePopupIsOpen(false);
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
