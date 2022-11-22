import React from "react";
import { StyledProfileIcon } from "./profile-icon.styles";
import { useTypedDispatch } from "../../../store/typed-hooks";
import { toggleProfileMenu } from "../../../store/slices/user.slice";

const ProfileIcon: React.FC = () => {
  const dispatch = useTypedDispatch();
  return <StyledProfileIcon className="fa-solid fa-user" onClick={() => dispatch(toggleProfileMenu())}></StyledProfileIcon>;
};

export default ProfileIcon;
