import styled from "styled-components";
import { Button } from "../../components";
import { URL_LOCATION } from "../../store/slices/user-location.slice";

export const ContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  padding: 3rem 4rem;
`;

export const LeftSection = styled.div`
  height: 100%;
  width: 70%;
`;

type CSSBackgroundImageProps = {
  src: string;
};

export const CSSBackgroundImage = styled.span<CSSBackgroundImageProps>`
  display: inline-block;
  height: 100%;
  width: 50%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.src})`};
  :first-child {
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
  :nth-child(2) {
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
  }
`;

export const RightSection = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 3.5rem;
  @media screen and (max-width: 1280px) {
    padding-right: 0.8rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
  span {
    display: block;
    font-style: italic;
    color: #888;
    margin-bottom: 1.5rem;
  }
`;

export const LinkToCollection = styled.p`
  margin-top: 3rem;
  margin-bottom: 0.6rem;
`;

export const ContainerMobile = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;

type ContentMobileProps = {
  userLocation: URL_LOCATION;
};

export const ContentMobile = styled.div<ContentMobileProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  height: 100vh;
  margin: 1rem 2.5rem;
  padding: 0 8vw 6rem 8vw;
  background-image: ${(props) =>
    props.userLocation === URL_LOCATION.WOMEN
      ? "url(/product-images/index-women-1.jpg)"
      : "url(/product-images/index-men-1.jpg)"};
  background-size: cover;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.1) inset;
  h2 {
    margin-bottom: 1rem;
  }
  span {
    display: block;
    font-style: italic;
    color: #ddd;
    margin-bottom: 1.5rem;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 3rem;
  width: 20vw;
  min-width: 16rem;
`;
