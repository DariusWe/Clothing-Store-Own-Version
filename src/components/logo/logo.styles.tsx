import styled from "styled-components";
import { Link } from "react-router-dom";

// Muss noch schöner gemacht und besser positioniert werden
// max-width value überall duch breakpoint-konstante ersetzen

export const LogoContainer = styled(Link)`
  img {
    width: 11rem;
    @media screen and (max-width: 1020px) {
      width: 7.5rem;
    }
    @media screen and (max-width: 650px) {
      width: 7rem;
    }
  }
`;
