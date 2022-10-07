import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding-top: 30vh;
  padding-right: 12vw;
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

export const GuestSection = styled.div`
  width: 400px;
  h2 {
    margin-bottom: 51px;
    text-transform: uppercase;
  }

  button {
    position: relative;
    top: 14px;
    margin-top: 40px;
    width: 280px;
  }
`;