import { Container } from "./profile-icon.styles";
import { useTypedDispatch } from "../../store/hooks";
import { toggleProfileMenu } from "../../store/user.slice";

const ProfileIcon = () => {
  console.log("ProfileIcon");
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
