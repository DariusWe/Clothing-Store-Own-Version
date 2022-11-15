import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
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