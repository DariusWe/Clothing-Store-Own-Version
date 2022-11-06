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
  /* background-color: #00000016;
  padding: 4px 8px 2px 8px;
  border-radius: 100%; */
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
  /* background-color: #00000016;
  padding: 4px 8px 2px 8px;
  border-radius: 100%; */
  &:hover {
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
  & span:nth-child(2){
    font-size: 13.2px;
    font-weight: 600;
    margin-top: 2px;
  }
`;

export const AddButton = styled.div`
  font-size: 11.8px;
  font-weight: 600;
  color: #222;
  padding: 9px 7px 9px 7px;
  margin-right: 2px;
  //border-radius: 100%;
  border: 1px solid #444;
  &:hover {
    cursor: pointer;
    background-color: #222;
    color: white;
  }
`;