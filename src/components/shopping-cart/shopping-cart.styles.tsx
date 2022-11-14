import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
`;

export const Label = styled.span`
  display: inline-block;
  margin-bottom: 25px;
  padding: 0 30px;
  font-size: 24px;
  font-weight: 600;
  color: #222;
`;

const itemRemovedStyles = css`
  animation-name: asd;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  @keyframes asd {
    0% {
      opacity: 0;
    }
    15% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

type ItemListProps = {
  itemRemoved: boolean;
};

export const ItemList = styled.div<ItemListProps>`
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

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 0 30px;
  border-top: 2px solid #222;
  button {
    width: 100%;
    margin: 25px 0 15px 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  &:nth-child(3) {
    border-top: 1px solid #aaa;
    padding-top: 8px;
    margin-top: 8px;
  }
`;

export const EmptyMessage = styled.span`
  margin: 40px auto;
`;
