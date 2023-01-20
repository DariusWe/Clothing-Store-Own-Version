import styled from "styled-components";

export const Container = styled.div`
  width: 42rem;
  padding: 5.5rem 6rem;
  text-transform: uppercase;
  background-color: #f0f0f0;
  h1 {
    margin-bottom: 4rem;
    font-size: var(--font-size-xl);
    @media screen and (max-width: 650px) {
      font-size: var(--font-size-l);
    }
  }
  button {
    display: block;
    margin: 1rem 0;
    width: 100%;
  }
  span {
    display: block;
    text-transform: none;
    margin-top: 30px;
    a {
      text-decoration: underline;
    }
  }
`;

// export const ResetPasswordSection = styled.div`
//   font-size: 1.1rem;
//   margin-bottom: 3rem;
//   a {
//     margin-left: 1rem;
//     text-decoration: underline;
//   }
// `;
