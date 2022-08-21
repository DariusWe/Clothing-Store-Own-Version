import styled from "styled-components";

export const CategoryTitle = styled.h1`
  font-family: "Satoshi", sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #222;
  text-transform: uppercase;
  padding: 0px 40px;
  margin-top: -2px;
  margin-bottom: 10px;
`;

export const CategoryDescription = styled.p`
  padding: 0 40px;
  margin-bottom: 45px;
  width: 50%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  margin: 40px 0 0 40px;
`;