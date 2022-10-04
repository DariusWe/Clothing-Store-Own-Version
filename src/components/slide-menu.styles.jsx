import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30vw;
  min-width: 340px;
  max-width: 520px;
  height: 100vh;
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 2;
  transition: display 2s;
  .fa-xmark {
    position: absolute;
    top: 18px;
    right: 30px;
    font-size: 24px;
    color: #222;
    padding: 10px;
    cursor: pointer;
  }
`;
