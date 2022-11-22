import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  border-top: 2px solid #222;
  button {
    width: 100%;
    margin: 2.5rem 0 1.5rem 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  &:nth-child(3) {
    border-top: 1px solid #aaa;
    padding-top: 0.8rem;
    margin-top: 0.8rem;
  }
`;

export const EmptyMessage = styled.span`
  margin: 4rem auto;
`;