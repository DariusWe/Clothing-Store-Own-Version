import { Container } from "./profile-icon.styles";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { USER_ACTION_TYPES } from "../store/user/user.types";

const ProfileIcon = () => {
  console.log("Render/Rerender of ProfileIcon");
  const dispatch = useDispatch();

  return (
    <Container
      onClick={() => {
        dispatch({ type: USER_ACTION_TYPES.TOGGLE_PROFILE_MENU });
      }}
    >
      <i className="fa-solid fa-user"></i>
    </Container>
  );
};

export default ProfileIcon;
