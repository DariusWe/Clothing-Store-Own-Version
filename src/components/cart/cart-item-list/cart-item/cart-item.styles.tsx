import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  padding: 2rem 0;
  img {
    width: 20vh;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-left: 2rem;
  & button {
    border: none;
    padding: 0.5rem;
    background-color: transparent;
    cursor: pointer;
  }
  span:first-child {
    margin-bottom: 1rem;
  }
  i {
    font-size: 1.2rem;
  }
`;

export const DeleteIcon = styled.span`
  position: relative;
  right: 1rem;
  color: #666;
  cursor: pointer;
`;
