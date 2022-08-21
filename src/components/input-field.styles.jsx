import styled, { css } from "styled-components";

export const Group = styled.div`
  margin: 20px 0;
`;

const isActiveStyles = css`
  margin-top: -48px;
  font-size: 12px;
`;

export const Label = styled.label`
  display: block;
  position: absolute;
  font-size: inherit;
  color: #666;
  margin-top: -28px;
  pointer-events: none;
  transition: 0.3s;
  ${(props) => (props.isActive ? isActiveStyles : null)};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #888;
  background-color: transparent;
  width: 100%;
  line-height: 28px;
  font-size: inherit;
  &:focus ~ label {
    ${isActiveStyles};
  }
`;

// .group {
//   margin: 20px 0;

//   label {
//     display: block;
//     position: absolute;
//     font-size: inherit;
//     color: #666;
//     margin-top: -28px;
//     pointer-events: none;
//     transition: 0.3s;

//     &.shrink {
//       margin-top: -48px;
//       font-size: 12px;
//     }
//   }

//   input {
//     border: none;
//     outline: none;
//     border-bottom: 1px solid #888;
//     background-color: transparent;
//     width: 100%;
//     line-height: 28px;
//     font-size: inherit;

//     &:focus ~ label {
//       margin-top: -48px;
//       font-size: 12px;
//     }
//   }
// }
