import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: -20px;
  top: 30px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 15px;
  font-weight: 400;
  background-color: white;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  text-transform: capitalize;
  border-bottom: 1px solid #f2f2f2;
  padding-left: 15px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
  i {
    margin-right: 10px;
    font-size: 12px;
  }
`;