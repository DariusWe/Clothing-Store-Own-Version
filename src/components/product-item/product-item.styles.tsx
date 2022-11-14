import styled, { css } from "styled-components";

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

const isActiveStyles = css`
  /* color: #ff5e5e; */
  color: #555;
  &:hover {
    /* color: #ff5e5e; */
    color: #555;
  }
`;

type HeartIconProps = {
  isActive: boolean;
  wasClicked: boolean;
};

export const HeartIcon = styled.i<HeartIconProps>`
  position: absolute;
  right: 18px;
  top: 12px;
  font-size: 18px;
  color: white;
  padding: 4px;
  &:hover {
    cursor: pointer;
    /* color: #ff9e9e; */
    color: rgba(0, 0, 0, 0.6);
  }
  ${(props) => (props.isActive ? isActiveStyles : null)};
  @keyframes heartIconPop {
    0% {
      transform: none;
    }
    50% {
      transform: scale(0.75);
    }
    100% {
      transform: none;
    }
  }
  &:focus {
    animation: heartIconPop 0.22s;
  }
  &:active {
    animation: none;
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

// export const AddButton = styled.div`
//   font-size: 11.4px;
//   font-weight: 600;
//   color: #222;
//   padding: 9px;
//   margin-right: 2px;
//   border: 1px solid #444;
//   &:hover {
//     cursor: pointer;
//     background-color: #222;
//     color: white;
//   }
// `;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: calc(31vw - 106px);
  background-color: rgba(0, 0, 0, 0.06);
  background-image: linear-gradient(to top right, #fcfcfc, #f2f2f2);
`;
