import styled from "styled-components";

export const Container = styled.div`
  padding: 1.8rem 3rem;
  min-height: 100vh;
  @media screen and (max-width: 650px) {
    padding: 3.2rem 2.6rem;
  }
`;

export const CategoryTitle = styled.h1`
  margin-bottom: 1rem;
  @media screen and (max-width: 650px) {
    font-size: var(--font-size-xl);
  }
`;

export const CategoryDescription = styled.p`
  margin-bottom: 4.5rem;
  width: 50%;
  min-width: 60rem;
  max-width: 90rem;
  @media screen and (max-width: 650px) {
    width: 100%;
    min-width: 100%;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  margin-top: 3.5rem;
  @media screen and (max-width: 650px) {
    gap: 2%;
  }
`;