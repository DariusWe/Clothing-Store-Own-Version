import styled from "styled-components";

export const Container = styled.span`
  position: relative; // needed to effectively set "position: absolute" on child component
  margin: -0.5rem 1rem;
  color: #222;
  font-size: 1.26rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 2;
  @media screen and (max-width: 650px) {
    margin-right: 0.4rem;
  }
  &:first-child {
    margin-left: -0.5rem;
    padding-left: 0;
  }
  i {
    margin-left: 1rem;
  }
  .dropdown-enter {
    max-height: 0;
  }
  .dropdown-enter-active {
    transition: all 50ms;
    transition-timing-function: ease-in;
    max-height: 42rem;
  }
  .dropdown-exit {
    max-height: 42rem;
  }
  .dropdown-exit-active {
    transition: all 50ms;
    max-height: 0;
  }
`;

export const FilterItemContainer = styled.span`
  padding: 0.5rem;
  cursor: pointer;
`;
