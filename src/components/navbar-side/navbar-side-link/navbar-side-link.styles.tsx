import styled, { css } from "styled-components";

const isActiveStyles = css`
  box-shadow: 0px -10px 0 rgb(218, 218, 218) inset;
`;

type NavLinkProps = {
  isActive: boolean;
};

export const NavLink = styled.span<NavLinkProps>`
  display: inline-block;
  color: #111;
  padding: 2px 0;
  &:hover {
    cursor: pointer;
    text-decoration: underline #aaa;
    text-underline-offset: 4px;
  }
  ${(props) => (props.isActive ? isActiveStyles : null)};
`;
