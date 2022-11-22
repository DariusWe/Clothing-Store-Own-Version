import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-left: 3rem;
`;

type LinkProps = {
  fontWeight: string;
};

export const GenderLink = styled(Link)<LinkProps>`
  display: inline-block;
  margin: 3rem 0;
  text-transform: uppercase;
  font-weight: ${(props) => props.fontWeight};
  &:nth-child(2) {
    margin-left: 2rem;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 1rem 0;
  }
`;

type NavItemProps = {
  $isActive: boolean;
};

export const NavItem = styled(Link)<NavItemProps>`
  width: 88%;
  padding: 0.4rem 0;
  font-weight: var(--text-fontWeight);
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: #ececec;
  }
  i {
    color: #666;
  }
  span {
    padding: 0.6rem 2rem;
    border-radius: 0.6rem;
    ${(props) =>
    props.$isActive
      ? css`
          background-color: #ddd;
          font-weight: 600;
        `
      : null}
  }
`;
