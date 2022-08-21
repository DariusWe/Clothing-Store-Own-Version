import {Container} from "./profile-icon.styles";
import { useContext } from "react";
import { ProfilePopupContext } from "../contexts/profilePopupContext";
// import { UserAuthContext } from "../contexts/UserAuthContext";

const ProfileIcon = (props) => {
  // const { currentUser } = useContext(UserAuthContext); // Maybe needed later to display profile information or something
  const { profilePopupIsOpen, setProfilePopupIsOpen } = useContext(ProfilePopupContext);

  return (
    <Container onClick={() => (profilePopupIsOpen ? setProfilePopupIsOpen(false) : setProfilePopupIsOpen(true))}>
      <i className="fa-solid fa-user"></i>
    </Container>
  );
};

export default ProfileIcon;
