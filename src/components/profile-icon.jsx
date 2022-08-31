import { Container } from "./profile-icon.styles";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const ProfileIcon = () => {
  const dispatch = useDispatch();

  return (
    <Container
      onClick={() => {
        dispatch({ type: "TOGGLE_PROFILE_MENU" });
      }}
    >
      <i className="fa-solid fa-user"></i>
    </Container>
  );
};

export default ProfileIcon;
