import styled from "styled-components";

export const Container = styled.div`
  width: 42rem;
  padding: 6rem;
  text-transform: uppercase;
  h1 {
    margin-bottom: 4rem;
    font-size: var(--font-size-xl);
    @media screen and (max-width: 650px) {
      font-size: var(--font-size-l);
    }
  }
  button {
    display: block;
    width: 100%;
    margin: 3rem 0 2rem 0;
  }
`;

export const LoginSection = styled.div`
  font-size: var(--font-size-xs);
  a {
    margin-left: 1rem;
    text-decoration: underline;
  }
`;
