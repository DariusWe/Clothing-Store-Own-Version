import { Container } from "./profile-menu.styles";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleProfileMenu } from "../store/user.slice";
import { signOutUser } from "../utils/firebase";
import RightSideMenu from "./right-side-menu";
import Button from "./button";

const ProfileMenu = () => {
  console.log("Render/Rerender of ProfilePopup");
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const profileMenuRef = useRef();

  const signOut = () => {
    signOutUser().then(() => {
      dispatch(toggleProfileMenu());
    });
  };

  //////////////// Outside-click-handler

  useEffect(() => {
    document.addEventListener("mousedown", checkClickLocation);
    return () => {
      document.removeEventListener("mousedown", checkClickLocation);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkClickLocation = (e) => {
    if (!profileMenuRef.current.contains(e.target)) {
      closeProfileMenu();
    }
  };

  const closeProfileMenu = () => {
    dispatch(toggleProfileMenu());
  };

  ////////////////

  return (
    <RightSideMenu>
      <Container ref={profileMenuRef}>
        {currentUser ? (
          <div>
            <span>Signed in as: {currentUser.displayName}</span>
            <span>Email: {currentUser.email}</span>
            <Button value="Sign Out" onClick={signOut} />
          </div>
        ) : null}
      </Container>
    </RightSideMenu>
  );
};

export default ProfileMenu;
