import { Container } from "./profile-menu.styles";
import { useSelector, useDispatch } from "react-redux";
import { toggleProfileMenu } from "../store/user.slice";
import { signOutUser } from "../utils/firebase";
import SlideMenu from "./slide-menu";
import Button from "./button";

const ProfileMenu = () => {
  console.log("Render/Rerender of ProfilePopup");
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const signOut = () => {
    signOutUser().then(() => {
      dispatch(toggleProfileMenu());
    });
  };

  return (
    <SlideMenu context="profile-menu">
      <Container>
        {currentUser ? (
          <div>
            <span>Signed in as: {currentUser.displayName}</span>
            <span>Email: {currentUser.email}</span>
            <Button value="Sign Out" onClick={signOut} />
          </div>
        ) : null}
      </Container>
    </SlideMenu>
  );
};

export default ProfileMenu;
