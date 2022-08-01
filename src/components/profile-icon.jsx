import "./profile-icon.scss";
import { useContext } from "react";
import { ProfilePopupContext } from "../contexts/profilePopupContext";
// import { UserAuthContext } from "../contexts/UserAuthContext";

const ProfileIcon = (props) => {
  // const { currentUser } = useContext(UserAuthContext); // Maybe needed later to display profile information or something
  const { profilePopupIsOpen, setProfilePopupIsOpen } = useContext(ProfilePopupContext);

  return (
    <div className="profile-icon" onClick={() => (profilePopupIsOpen ? setProfilePopupIsOpen(false) : setProfilePopupIsOpen(true))}>
      <i className="fa-solid fa-user"></i>
      {/* <span className="sign-in-text">Sign in</span> */}
    </div>
  );
};

export default ProfileIcon;
