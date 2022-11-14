import styled from "styled-components";

export const Wrapper = styled.div`
  .slide-menu-enter {
    transform: translateX(30vw);
  }
  .slide-menu-enter-active {
    transform: translateX(0);
    transition: all 0.3s ease-out;
  }
  .slide-menu-exit {
    transform: translateX(0);
  }
  .slide-menu-exit-active {
    transform: translateX(30vw);
    transition: all 0.3s;
  }
  .dark-overlay-enter {
    opacity: 0;
  }
  .dark-overlay-enter-active {
    opacity: 1;
    transition: all 0.2s;
  }
  .dark-overlay-exit {
    opacity: 1;
  }
  .dark-overlay-exit-active {
    opacity: 0;
    transition: all 0.2s;
  }
`;

export const SlideMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30vw;
  min-width: 340px;
  max-width: 520px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  z-index: 2;
`;

export const Label = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin: 0 30px;
  font-size: 24px;
  font-weight: 600;
  color: #222;
`;

export const CloseBtn = styled.i`
  position: absolute;
  top: 18px;
  right: 30px;
  font-size: 24px;
  color: #222;
  padding: 10px;
  cursor: pointer;
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
