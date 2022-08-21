import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30vw;
  min-width: 340px;
  max-width: 520px;
  height: 100vh;
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //box-shadow: -8px 0 26px -6px rgba(0, 0, 0, 0.06);
  z-index: 2;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border-bottom: 1px solid #444;
  margin-bottom: 25px;
  padding: 0 30px;
  span {
    font-size: 24px;
    font-weight: 600;
    color: #222;
  }
  i {
    font-size: 24px;
    color: #222;
    padding: 10px;
    cursor: pointer;
  }
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
