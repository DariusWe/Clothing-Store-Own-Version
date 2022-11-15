import styled, { css } from "styled-components";

const isActiveStyles = css`
  color: #444;
  &:hover {
    color: #444;
  }
`;

type StyledHeartIconProps = {
  isActive: boolean;
};

export const StyledHeartIcon = styled.i<StyledHeartIconProps>`
  position: absolute;
  right: 18px;
  top: 12px;
  font-size: 18px;
  color: white;
  padding: 4px;
  cursor: pointer;
  &:hover {
    color: #444;
  }
  ${(props) => (props.isActive ? isActiveStyles : null)};
  @keyframes heartIconPop {
    0% {
      transform: none;
    }
    50% {
      transform: scale(0.75);
    }
    100% {
      transform: none;
    }
  }
  &:focus {
    animation: heartIconPop 0.22s;
  }
  &:active {
    animation: none;
  }
`;
