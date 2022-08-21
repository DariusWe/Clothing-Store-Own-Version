import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const ContentArea = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;