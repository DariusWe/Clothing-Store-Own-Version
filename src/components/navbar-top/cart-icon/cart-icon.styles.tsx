import styled, { css } from "styled-components";

export const Container = styled.div`
  display: inline;
  cursor: pointer;
`;

type CounterProps = {
  $theme: "dark" | "light";
};

const darkThemeStyles = css`
  color: white;
  background-color: var(--text-color);
  font-weight: 700;
`;

const lightThemeStyles = css`
  color: var(--text-color);
  background-color: white;
  font-weight: 800;
`;

export const Counter = styled.span<CounterProps>`
  display: inline-flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 100%;
  font-size: 1.2rem;
  top: -1rem;
  left: -0.4rem;
  ${(props) => (props.$theme === "dark" ? darkThemeStyles : lightThemeStyles)}
`;
