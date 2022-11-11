import styled from "styled-components";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.div`
  position: sticky;
  position: -webkit-sticky; /* Safari */
  // Edge 15 and earlier Versions also don't support sticky. Alternative Solution?
  top: 0px;
  height: 100vh;
  //width: 15.8vw;
  padding: 25px 30px;
  padding-right: 40px;
  //border-right: 1px solid #222;
  //background-color: #f6f6f6;
  //box-shadow: 5px 5px 20px #00000010;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

type LinkProps = {
  fontWeight: string;
};

export const GenderLink = styled(Link)<LinkProps>`
  display: inline-block;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: ${(props) => props.fontWeight};
  &:nth-child(2) {
    margin-left: 20px;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // otherwise the links will span the full width and the border would be not just under the word
  border-left: 1px solid #000;
  border-radius: 1px;
  padding-left: 20px;
`;

export const LoadingSpinnerNavbar = styled(LoadingSpinner)`
  height: 17vh;
  width: 50%;
  span {
    height: 20px;
    width: 20px;
    border-width: 2px;
  }
`;
