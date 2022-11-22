import styled from "styled-components";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import { Link } from "react-router-dom";

export const SideBarContainer = styled.div`
  position: sticky;
  position: -webkit-sticky; /* Safari */
  // Edge 15 and earlier Versions also don't support sticky. Alternative Solution?
  top: 0px;
  height: 100vh;
  min-width: 24rem;
  padding: 2.6rem 4rem 2.5rem 3rem;
  //flex-shrink: 0;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

type LinkProps = {
  $fontWeight: string;
};

export const GenderLink = styled(Link)<LinkProps>`
  display: inline-block;
  margin-top: 11rem;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-weight: ${(props) => props.$fontWeight};
  &:nth-child(2) {
    margin-left: 2rem;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; // otherwise the links will span the full width and the border would be not just under the word
  border-left: 1px solid #000;
  border-radius: 1px;
  padding-left: 2rem;
`;

export const LoadingSpinnerNavbar = styled(LoadingSpinner)`
  height: 17vh;
  width: 50%;
  span {
    height: 2rem;
    width: 2rem;
    border-width: 2px;
  }
`;
