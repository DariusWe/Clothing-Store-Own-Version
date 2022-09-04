import { Container } from "./profile-icon.styles";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { toggleProfileMenu } from "../store/user/user.actions";

const ProfileIcon = () => {
  console.log("Render/Rerender of ProfileIcon");
  const dispatch = useDispatch();

  return (
    <Container
      onClick={() => {
        dispatch(toggleProfileMenu());
      }}
    >
      <i className="fa-solid fa-user"></i>
    </Container>
  );
};

export default ProfileIcon;
