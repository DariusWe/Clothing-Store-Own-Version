import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 10px;
  }
`;

// ANMERKUNG: evtl. position absolute durch relative ersetzen, damit das popup relativ zum parent element gesetzt werden kann, wodurch erreicht
// werden kann, dass das popup bündig mit dem Icon abschließt.
