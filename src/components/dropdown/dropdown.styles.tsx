import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: -2rem;
  top: 3rem;
  min-width: 28rem;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 1.5rem;
  font-weight: 400;
  background-color: var(--background-color);
  box-shadow: 0.4rem 0.4rem 1.5rem rgba(0, 0, 0, 0.08);
  overflow: hidden;
  @media screen and (max-width: 650px) {
    min-width: 25rem;
    left: 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  min-height: 5rem;
  width: 100%;
  text-transform: capitalize;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
  i {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;
