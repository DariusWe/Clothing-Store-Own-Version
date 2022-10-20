import { Container } from "./profile-icon.styles";
import { useTypedDispatch } from "../../hooks";
import { toggleProfileMenu } from "../../store/user.slice";

const ProfileIcon = () => {
  const dispatch = useTypedDispatch();

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
