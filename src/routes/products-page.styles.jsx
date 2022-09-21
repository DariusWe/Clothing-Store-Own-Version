import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 40px;
  min-height: 101vh;
`;

export const CategoryTitle = styled.h1`
  font-family: "Satoshi", sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #222;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const CategoryDescription = styled.p`
  margin-bottom: 45px;
  width: 50%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  margin-top: 40px;
`;