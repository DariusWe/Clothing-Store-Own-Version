import styled, { css } from "styled-components";

const itemRemovedStyles = css`
  animation-name: asd;
  animation-duration: 500ms;
  @keyframes asd {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

type ContainerProps = {
  itemRemoved: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  overflow-y: scroll;
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

  ${(props) => (props.itemRemoved ? itemRemovedStyles : null)};
`;
