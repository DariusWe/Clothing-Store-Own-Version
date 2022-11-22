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
  span:first-child {
    margin-bottom: 10px;
  }
  i {
    font-size: 1.2rem;
  }
  button {
    border-color: #666;
  }
`;

export const Notice = styled.span`
  margin: 2.2rem 0 1.2rem 0;
  color: green;
`;