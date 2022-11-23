import styled, { css } from "styled-components";

const listRepaintAnimation = css`
  animation-name: fadeIn;
  animation-duration: 500ms;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

type ContainerProps = {
  $itemRemoved: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 3rem;
  overflow-y: scroll;
  // Do i really need these:
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none;
  }
  .cart-item-exit {
    transform: translateX(0);
    opacity: 1;
  }
  .cart-item-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 320ms;
  }

  ${(props) => (props.$itemRemoved ? listRepaintAnimation : null)};
`;
