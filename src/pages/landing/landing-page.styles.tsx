import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  //height: calc(100vh - 3.6vw);
  padding: 30px 40px;
`;

export const LeftSection = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
  img:first-child {
    margin-left: calc(-10% + 40px); // Random formula that provides ~same percentages on FHD and Laptop Screen
  }
  img:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const RightSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 35px;
  h2 {
    font-size: 34px;
    margin-bottom: 4px;
    font-weight: 900;
    text-transform: uppercase;
    color: #222;
  }
  span {
    display: block;
    font-weight: 400;
    font-style: italic;
    color: #888;
    margin-bottom: 15px;
  }
`;

export const LinkToCollection = styled.p`
  margin-top: 30px;
  margin-bottom: 6px;
  font-weight: 600;
`;