import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoContainer = styled(Link)`
  font-family: "Boska", sans-serif;
  //padding: 1.4vw 2vw;
  //font-family: "Ranade", sans-serif;
  // font-family: "Stardom", sans-serif;
  //font-family: "Bebas Neue", sans-serif;
  // font-family: "Excon", sans-serif;
  //font-family: "Boska", sans-serif;
  //font-family: "Italiana";
  //border: 4px solid black;
  //font-family: 'Satoshi', sans-serif;
  //font-style: italic;

  //background-color: #000;
  /* padding-left: 16px;
  border-left: 8px solid black; */
  margin-bottom: 52px;
  border-radius: 10px;
  width: 100%;
  img {
    width: 100%;
    //border: 1px solid #666;
    border-radius: 5px;
  }
  span {
    font-size: 8vw;
    font-weight: 900;
    line-height: 6vw;
    color: black;
    margin-bottom: 5px;
    &:nth-child(2) {
      font-size: 6vw;
      margin-left: 5px;
    }
  }
  p {
    font-family: 'Satoshi', sans-serif;
    font-size: 1vw;
    line-height: 1vw;
    color: black;
  }
`;
