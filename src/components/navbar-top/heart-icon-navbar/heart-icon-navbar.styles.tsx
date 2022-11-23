import styled, { css } from "styled-components";

const AnimationStyles = css`
  animation-name: pop;
  animation-duration: 500ms;
  animation-fill-mode: backwards;
  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

type HeartIconProps = {
  $animate: boolean;
};

export const StyledHeartIcon = styled.i<HeartIconProps>`
  cursor: pointer;
  ${(props) => props.$animate && AnimationStyles}
`;
