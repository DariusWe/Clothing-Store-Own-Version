import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-top: 1px solid #ddd;
  padding: 20px 0;
  img {
    width: 20vh;
  }
  /* &:first-child {
    border-top: none;
    animation-name: pop;
    animation-duration: 300ms;
    animation-delay: 320ms;
    @keyframes pop {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.02);
      }
      100% {
        transform: scale(1);
      }
    }
  } */
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
