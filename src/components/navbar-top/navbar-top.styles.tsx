import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  top: 18px;
  right: 15px;
  padding: 10px 28px;
  background-color: white;
  z-index: 1;
  border-radius: 30px;
  .fa-heart {
    font-size: 19px;
    &:hover {
      cursor: pointer;
    }
  }
  .animate {
    animation-name: pop;
    animation-duration: 500ms;
    animation-fill-mode: backwards;
  }
  @keyframes pop {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.4);
      opacity: 0.8;
      //color: red;
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const NavLink = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
