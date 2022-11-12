import styled, { css } from "styled-components";

const lightTheme = css`
  background-color: white;
  border: 1px solid #444;
  color: black;
  &:hover {
    background-color: #222;
    color: white;
    border: 1px solid #222;
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
  theme: "dark" | "light";
};

export const Btn = styled.button<BtnProps>`
  font-family: "Satoshi", sans-serif;
  border-radius: 26px;
  padding: 12px 16px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  font-weight: 600;
  ${(props) => (props.theme === "light" ? lightTheme : darkTheme)}
`;
