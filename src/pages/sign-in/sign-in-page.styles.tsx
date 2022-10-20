import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-top: 30vh;
  margin-right: 18%;
`;

export const Divider = styled.div`
  width: 10vw;
  height: 200px;
  font-size: 15px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterSection = styled.div`
  width: 300px;

  h2 {
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  button {
    position: relative;
    top: 14px;
    margin-top: 30px;
    width: 280px;
  }
`;
