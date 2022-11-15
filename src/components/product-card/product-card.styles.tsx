import styled from "styled-components";

export const Container = styled.div`
  position: relative; // Needed to allow positioning HeartIcon
  width: 24.24%;
  height: auto;
  margin-bottom: 40px;
  img {
    width: 100%;
    cursor: pointer;
    &:hover {
      filter: brightness(0.98);
    }
  }
`;

export const BottomSection = styled.div`
  margin: 14px 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @keyframes buttonPop {
    0% {
      transform: none;
    }
    50% {
      transform: scale(0.96);
    }
    100% {
      transform: none;
    }
  }
  button {
    padding: 11px 12px;
    margin-right: 2px;
    font-size: 11.4px;
    font-weight: 500;
    border-color: #ccc;
    &:focus {
      animation: buttonPop 0.16s;
    }
    &:active {
      animation: none;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14.8px;
  cursor: pointer;
  & span:nth-child(2) {
    font-size: 13.2px;
    font-weight: 600;
    margin-top: 2px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: calc(31vw - 106px);
  background-color: rgba(0, 0, 0, 0.06);
  background-image: linear-gradient(to top right, #fcfcfc, #f2f2f2);
`;
