import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  h3 {
    display: block;
    padding-bottom: 25px;
    margin-bottom: 20px;
    margin-top: 7px;
    font-size: 20px;
    font-weight: 600;
    color: #222;
    border-bottom: 1px solid #aaa;
  }

  span {
    display: block;
    padding: 6px 0;
    font-size: 16px;
    //border-bottom: 1px solid #aaa;
    &:last-child {
      margin-top: 20px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

// ANMERKUNG: evtl. position absolute durch relative ersetzen, damit das popup relativ zum parent element gesetzt werden kann, wodurch erreicht
// werden kann, dass das popup bündig mit dem Icon abschließt.
