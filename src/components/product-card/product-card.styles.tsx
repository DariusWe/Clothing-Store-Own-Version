import styled from "styled-components";

export const Container = styled.div`
  position: relative; // Needed to allow positioning HeartIcon
  width: 24.24%;
  height: auto;
  margin-bottom: 5rem;
  img {
    width: 100%;
    cursor: pointer;
    filter: brightness(0.96);
    &:hover {
      filter: brightness(0.976);
    }
    animation: softAppear;
    animation-duration: 150ms;
    animation-timing-function: ease-out;
    @keyframes softAppear {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 900px) {
    width: 32.6%;
  }
  @media screen and (max-width: 650px) {
    width: 49%;
  }
  @media screen and (min-width: 2400px) {
    width: 19.2%;
  }
`;

export const BottomSection = styled.div`
  position: relative;
  margin-top: 1rem;
  @media screen and (min-width: 2000px) {
    margin-top: 0.8rem;
  }
  button {
    position: absolute;
    top: 0;
    right: 0.3rem;
    padding: 1.1rem 1.2rem;
    font-size: 1.15rem;
    font-weight: 500;
    border-color: #ccc;
    @media screen and (max-width: 650px) {
      padding: 0.6rem 0.8rem;
    }
    &:focus {
      animation: buttonPop 0.16s;
    }
    &:active {
      animation: none;
    }
    @keyframes buttonPop {
      0% {
        transform: none;
      }
      50% {
        transform: scale(0.96);
      }
      100% {
        transform: none;
      }
    }
  }
`;

export const ProductInfo = styled.div`
  //flex: 1;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span:first-child {
    max-width: 55%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 45%;
  }
  span:nth-child(2) {
    font-size: 1.32rem;
    font-weight: 600;
    margin-top: 0.2rem;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 0.7829 / 1;
  background-image: linear-gradient(to top right, #fcfcfc, #f2f2f2);
  img {
    display: block; // If not specified, there will be some white space below the image, so the placeholder will be larger than the image.
  }
`;
