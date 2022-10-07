import styled from "styled-components";

export const Container = styled.div`
  width: 24.24%;
  height: auto;
  margin-bottom: 40px;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const BottomSection = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  cursor: pointer;
`;

export const AddButton = styled.div`
  font-size: 26px;
  font-weight: 600;
  color: #222;
  padding: 0 12px 5px 12px;
  border-radius: 100%;
  &:hover {
    cursor: pointer;
    background-color: #222;
    color: white;
  }
`;