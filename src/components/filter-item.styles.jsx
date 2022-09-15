import styled from "styled-components";

export const Container = styled.span`
  position: relative; // needed to effectively set "position: absolute" on child component
  margin: -5px 10px;
  color: #222;
  font-size: 12.6px;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 2;
  &:first-child {
    margin-left: -5px;
    padding-left: 0;
  }
  i {
    margin-left: 10px;
  }
`;

export const FilterItemContainer = styled.span`
  padding: 5px;
  cursor: pointer;
`;