import styled from "styled-components";

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

export const ItemList = styled.div`
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
  .cart-item-enter {
  }
  .cart-item-enter-active {
  }
  .cart-item-enter-done {
    opacity: 0;
  }
  .cart-item-exit {
    transform: translateX(0);
    opacity: 1;
  }
  .cart-item-exit-active {
    //transform: translateX(100%);
    opacity: 0;
    transition: all 320ms;
    //transition: opacity 300ms;
  }
  /* animation-name: asd;
  animation-duration: 300ms;

  @keyframes asd {
    0% {transform: translateY(200px)};
    100% {transform: translateY(0)};
  } */
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
