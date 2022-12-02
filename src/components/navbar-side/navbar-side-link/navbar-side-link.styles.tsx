import styled, { css } from "styled-components";

const isActiveStyles = css`
  //box-shadow: 0px -10px 0 rgb(218, 218, 218) inset;
  &:hover::after {
    width: 0%;
  }
  ::before {
    width: 100%;
  }
`;

type NavLinkProps = {
  $isActive: boolean;
};

export const NavLink = styled.span<NavLinkProps>`
  position: relative;
  display: inline-block;
  font-weight: 400;
  padding: 0.2rem 0;
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0%;
    background-color: #eee;
    background-color: rgba(0,0,0,0.26);
    transition: width 200ms;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.95rem;
    width: 0%;
    background-color: #eee;
    background-color: rgba(0,0,0,0.12);
    transition: width 300ms;
  }
  &:hover::after {
    /* text-decoration: underline #aaa;
    text-underline-offset: 0.4rem; */
    width: 100%;
  }
  ${(props) => (props.$isActive ? isActiveStyles : null)};
`;
