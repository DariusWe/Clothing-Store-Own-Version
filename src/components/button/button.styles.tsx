import styled, { css } from "styled-components";

const lightTheme = css`
  background-color: var(--background-color);
  border: 1px solid #444;
  color: black;
  &:hover {
    background-color: #222;
    color: white;
    border: 1px solid #222;
  }
`;

const lightBorderlessTheme = css`
  background-color: var(--background-color);
  color: black;
  &:hover {
    background-color: #dedede;
  }
`;

const darkTheme = css`
  background-color: #222;
  color: white;
  &:hover {
    background-color: #333;
  }
`;

type BtnProps = {
  theme: "dark" | "light" | "lightBorderless";
};

export const Btn = styled.button<BtnProps>`
  font-family: "Satoshi", sans-serif;
  border-radius: 2.6rem;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  ${(props) => (props.theme === "light" ? lightTheme : props.theme === "lightBorderless" ? lightBorderlessTheme : darkTheme)}
`;
