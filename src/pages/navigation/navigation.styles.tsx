import styled, { css } from "styled-components";
import { VIEWPORT_TYPES } from "../../store/slices/current-viewport.slice";

export const Container = styled.div`
  display: flex;
`;

type ContentAreaProps = {
  $layoutFor: VIEWPORT_TYPES;
};

export const ContentArea = styled.div<ContentAreaProps>`
  width: 100%;
  //overflow-x: hidden;
  ${(props) =>
    props.$layoutFor !== VIEWPORT_TYPES.DESKTOP &&
    css`
      margin-top: var(--mobile-navbar-height);
    `}
`;
