import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;

  h3 {
    display: flex;
    align-items: center;
    height: 8rem; 
    font-size: 2rem;
    text-transform: capitalize;
    font-weight: 600;
    border-bottom: 1px solid #aaa;
    margin-bottom: 2rem;
  }

  span {
    display: block;
    padding: 0.6rem 0;
    &:last-child {
      margin-top: 2rem;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

// ANMERKUNG: evtl. position absolute durch relative ersetzen, damit das popup relativ zum parent element gesetzt werden kann, wodurch erreicht
// werden kann, dass das popup bündig mit dem Icon abschließt.
