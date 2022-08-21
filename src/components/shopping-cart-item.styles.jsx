import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #ccc;
  padding: 20px 0;
  img {
    width: 20vh;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 20px;
  & button {
    border: none;
    padding: 5px;
    background-color: transparent;
    cursor: pointer;
  }
  span:first-child {
    margin-bottom: 10px;
  }
  i {
    font-size: 12px;
  }
`;

export const DeleteIcon = styled.span`
  position: relative;
  right: 10px;
  color: #666;
  font-size: 14px;
  cursor: pointer;
`;