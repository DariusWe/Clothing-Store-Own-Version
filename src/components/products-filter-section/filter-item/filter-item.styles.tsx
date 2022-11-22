import styled from "styled-components";

export const Container = styled.span`
  position: relative; // needed to effectively set "position: absolute" on child component
  margin: -0.5rem 1rem;
  color: #222;
  font-size: 1.26rem;
  font-weight: 600;
  text-transform: uppercase;
  z-index: 2;
  /* padding: 8px;
  padding-left: 20px;
  box-shadow: 5px 5px 10px #f1f1f1;
  border-radius: 24px; */
  &:first-child {
    margin-left: -0.5rem;
    padding-left: 0;
  }
  i {
    margin-left: 1rem;
  }

  .dropdown-enter {
    max-height: 0;
    opacity: 0;
  }
  .dropdown-enter-active {
    transition: all 150ms;
    transition-timing-function: ease-in;
    max-height: 42rem;
    opacity: 1;
  }
  .dropdown-exit {
    max-height: 42rem;
    opacity: 1;
  }
  .dropdown-exit-active {
    transition: all 150ms;
    max-height: 0;
    opacity: 0;
  }
`;

export const FilterItemContainer = styled.span`
  padding: 0.5rem;
  cursor: pointer;
`;