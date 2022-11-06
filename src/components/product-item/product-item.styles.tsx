import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative; // Needed to allow positioning HeartIcon
  width: 24.24%;
  height: auto;
  margin-bottom: 40px;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

const isActiveStyles = css`
  color: #ff5e5e;
`;

type HeartIconProps = {
  isActive: boolean;
};

export const HeartIcon = styled.i<HeartIconProps>`
  position: absolute;
  right: 18px;
  top: 12px;
  font-size: 20px;
  color: white;
  padding: 4px;
  &:hover {
    cursor: pointer;
    color: #ff9e9e;
  }
  ${(props) => (props.isActive ? isActiveStyles : null)};
`;

export const ActiveHeartIcon = styled.span`
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 20px;
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

export const BottomSection = styled.div`
  margin: 14px 0 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 8px 10px;
    font-size: 11.4px;
    //border-radius: 0;

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

export const AddButton = styled.div`
  font-size: 11.4px;
  font-weight: 600;
  color: #222;
  padding: 9px;
  margin-right: 2px;
  //border-radius: 25px;
  border: 1px solid #444;
  &:hover {
    cursor: pointer;
    background-color: #222;
    color: white;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: calc(31vw - 106px);
  background-color: rgba(0, 0, 0, 0.06);
  background-image: linear-gradient(to top right, #fcfcfc, #f2f2f2);
  //
  //background-image: radial-gradient(#000000 0.30000000000000004px, #ffffff 0.30000000000000004px);
  //background-size: 6px 6px;
  //
  /* background-image: linear-gradient(#ccc 0.6px, transparent 0.6px),
    linear-gradient(to right, #ccc 0.6px, #ffffff 0.6px);
  background-size: 12px 12px; */
  //
  //background: repeating-linear-gradient(52deg, #ccc, #ccc 1px, #ffffff 1px, #ffffff 10px);
`;
