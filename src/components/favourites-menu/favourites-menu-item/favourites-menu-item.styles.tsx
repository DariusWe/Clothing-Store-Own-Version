import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
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
  span:first-child {
    margin-bottom: 10px;
  }
  i {
    font-size: 12px;
  }
  button {
    border-color: #666;
  }
`;

export const Notice = styled.span`
  margin: 22px 0 12px 0;
  color: green;
`;