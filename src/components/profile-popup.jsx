import {Container} from "./profile-popup.styles";
import Button from "./button";
import { useContext } from "react";
import { signOutUser } from "../utils/firebase";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { ProfilePopupContext } from "../contexts/profilePopupContext";
import { useNavigate } from "react-router-dom";

const ProfilePopup = () => {
  const { setCurrentUser, currentUser } = useContext(UserAuthContext);
  const { setProfilePopupIsOpen } = useContext(ProfilePopupContext);
  const navigate = useNavigate();

  const signOut = () => {
    signOutUser().then(() => {
      setCurrentUser(null);
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
      ) : (
        <Button value="Sign In" onClick={() => {
          setProfilePopupIsOpen(false);
          navigate("/auth");
        }} />
      )}
    </Container>
  );
};

export default ProfilePopup;
