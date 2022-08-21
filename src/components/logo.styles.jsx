import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoContainer = styled(Link)`
  font-family: "Boska", sans-serif;
  font-size: 120px;
  font-weight: 900;
  margin-bottom: 60px;
  & span {
    display: block;
    line-height: 75px;
    color: #222;
    &:last-child {
      margin-left: 40px;
    }
  }
`;
