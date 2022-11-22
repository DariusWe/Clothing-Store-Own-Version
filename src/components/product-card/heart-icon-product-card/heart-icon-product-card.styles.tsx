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
  right: 1.8rem;
  top: 1.2rem;
  font-size: 1.8rem;
  color: var(--background-color);
  color: rgb(244, 244, 244);
  padding: 0.4rem;
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
