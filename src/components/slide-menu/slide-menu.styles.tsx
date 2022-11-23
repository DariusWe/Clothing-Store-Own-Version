import styled from "styled-components";

export const Wrapper = styled.div`
  .slide-menu-enter {
    transform: translateX(100%);
  }
  .slide-menu-enter-active {
    transform: translateX(0);
    transition: all 0.3s ease-out;
  }
  .slide-menu-exit {
    transform: translateX(0);
  }
  .slide-menu-exit-active {
    transform: translateX(100%);
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
  min-width: 34rem;
  max-width: 52rem;
  height: 100vh;
  background-color: var(--background-color);
  z-index: 4;
  @media screen and (max-width: 1020px) {
    width: 42vw;
  }
  @media screen and (max-width: 900px) {
    width: 50vw;
  }
  @media screen and (max-width: 650px) {
    width: 80vw;
    max-width: 80vw;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  margin: 0 3rem;
  font-size: 2.4rem;
  font-weight: 600;
  color: #222;
`;

export const CloseBtn = styled.i`
  position: absolute;
  top: 1.8rem;
  right: 3rem;
  font-size: 2.4rem;
  color: #222;
  padding: 1rem;
  cursor: pointer;
`;

export const DarkOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;
