import styled from "styled-components";

export const Container = styled.div``;

export const SelectedFilters = styled.div`
  margin-top: 2rem;
  font-size: 1.46rem;
  @media screen and (max-width: 650px) {
    margin-top: 1.2rem;
  }
  p {
    display: inline;
  }
  span {
    display: inline-block;
    padding-left: 1.2rem;
    padding-right: 0.6rem;
    margin: 0.8rem;
    text-transform: capitalize;
    background-color: #eee;
    border-radius: 0px;
    &:first-of-type {
      margin-left: 1.6rem;
    }
    i {
      color: #666;
      padding: 0.6rem;
      margin-left: 0.6rem;
      cursor: pointer;
    }
  }
`;
