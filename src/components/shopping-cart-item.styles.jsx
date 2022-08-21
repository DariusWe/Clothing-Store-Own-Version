import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 15px 0;
  img {
    width: 22vh;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  & button {
    border: none;
    padding: 5px;
    background-color: transparent;
    cursor: pointer;
  }
`;