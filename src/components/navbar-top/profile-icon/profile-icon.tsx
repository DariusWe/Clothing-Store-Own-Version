import { StyledProfileIcon } from "./profile-icon.styles";
import { useTypedDispatch } from "../../../store/hooks";
import { toggleProfileMenu } from "../../../store/user.slice";

const ProfileIcon = () => {
  const dispatch = useTypedDispatch();
  return <StyledProfileIcon className="fa-solid fa-user" onClick={() => dispatch(toggleProfileMenu())}></StyledProfileIcon>;
};

export default ProfileIcon;
