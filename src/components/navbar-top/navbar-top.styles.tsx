import styled from "styled-components";

export const DesktopNavbar = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  top: 1.7rem;
  right: 0.2rem;
  padding: 1.2rem 2.8rem;
  background-color: var(--background-color);
  z-index: 1;
  border-radius: 3rem;
  font-size: 1.8rem;
`;

export const MobileAndTabletNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--mobile-navbar-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem 0 3rem;
  background-color: var(--background-color);
  z-index: 3;
  @media screen and (max-width: 650px) {
    padding: 0 4.5rem 0 2.6rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  margin-right: -0.6rem;
  > * {
    padding: 10px 6px;
  }
`;

export const SignInSpan = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
`;
