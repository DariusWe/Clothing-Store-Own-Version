import styled, { css } from "styled-components";
import { ButtonProps } from "./button";

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

const disabledStyles = css`

  background: repeating-linear-gradient(-48deg, #9e9e9e 0px, #9e9e9e 5px, #8f8f8f 5px, #8f8f8f 10px);
  &:hover {
    background: repeating-linear-gradient(-48deg, #9e9e9e 0px, #9e9e9e 5px, #8f8f8f 5px, #8f8f8f 10px);
    cursor: default;
  }
`;

type BtnProps = {
  $theme: ButtonProps["buttonTheme"];
  $disabled: boolean;
};

export const Btn = styled.button<BtnProps>`
  font-family: "Satoshi", sans-serif;
  border-radius: 0.2rem;
  padding: 1.2rem 1.6rem;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  border: none;
  ${(props) =>
    props.$theme === "light" ? lightTheme : props.$theme === "lightBorderless" ? lightBorderlessTheme : darkTheme}
  ${(props) => props.$disabled && disabledStyles}
`;
