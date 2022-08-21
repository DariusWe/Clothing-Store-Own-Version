import styled from "styled-components";
import Button from "./button";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 28vw;
  min-width: 340px;
  max-width: 480px;
  height: 100vh;
  padding: 20px 30px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 26px -6px rgba(0, 0, 0, 0.06);
  z-index: 2;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;
  span {
    font-size: 24px;
  }
  i {
    font-size: 24px;
    padding: 10px;
    margin-right: 22px;
    cursor: pointer;
  }
`;

export const ItemList = styled.div`
  height: 78%;
  overflow-y: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CheckoutButton = styled(Button)`
  position: absolute;
  align-self: center;
  width: 85%;
  bottom: 5%;
`;

export const EmptyMessage = styled.span`
  margin: auto;
`;