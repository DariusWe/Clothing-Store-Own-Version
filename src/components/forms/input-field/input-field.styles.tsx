import styled, { css } from "styled-components";

export const Group = styled.div`
  margin: 2.8rem 0;
`;

const isActiveStyles = css`
  margin-top: -4.2rem;
  font-size: var(--font-size-xxs);
`;

type LabelProps = {
  $isActive: boolean;
};

export const Label = styled.label<LabelProps>`
  display: block;
  position: absolute;
  font-size: inherit;
  font-size: var(--font-size-s);
  color: #666;
  margin-top: -2.8rem;
  pointer-events: none;
  transition: 0.3s;
  ${(props) => (props.$isActive ? isActiveStyles : null)};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #888;
  background-color: transparent;
  width: 100%;
  line-height: 2.6rem;
  font-size: inherit;
  &:focus ~ label {
    ${isActiveStyles};
  }
`;