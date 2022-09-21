import styled from "styled-components";

export const Container = styled.div``;

export const SelectedFilters = styled.div`
  margin-top: 20px;
  font-size: 14.6px;
  p {
    display: inline;
  }
  span {
    display: inline-block;
    padding-left: 12px;
    padding-right: 6px;
    margin: 0 8px;
    text-transform: capitalize;
    background-color: #f6f6f6;
    //border: 1px solid #ccc;
    border-radius: 0px;
    &:first-of-type {
      margin-left: 16px;
    }
    i {
        color: #666;
        padding: 6px;
        margin-left: 6px;
        cursor: pointer;
    }
  }
`;
