import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  top: 22px;
  right: 25px;
  padding: 10px 28px;
  background-color: white;
  z-index: 1;
  border-radius: 30px;
  .fa-heart {
    font-size: 19px;
  }
`;

export const NavLink = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
