import styled from "styled-components";
import LoadingSpinner from "./loading-spinner";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.div`
  position: sticky;
  position: -webkit-sticky; /* Safari */
  // Edge 15 and earlier Versions also don't support sticky. Alternative Solution?
  top: 0px;
  height: 100vh;
  min-width: 17vw;
  padding: 38px 30px;
  //border-right: 1px solid #222;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const GenderLink = styled(Link)`
  display: inline-block;
  width: 87px;
  margin: 40px 0 30px 0;
  text-transform: uppercase;
  font-weight: ${(props) => props.fontWeight};
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // otherwise the links will span the full width and the border would be not just under the word
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
