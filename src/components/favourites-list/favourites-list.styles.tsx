import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 3rem;
  overflow-y: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    padding: 0.3rem 0.8rem;
    margin-bottom: 0.8rem;
    font-size: 1.4rem;
    font-weight: 400;
    //border-radius: 0;
    &:nth-child(3) {
        margin-top: 2rem;
    }
  }
  .favourites-item-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .favourites-item-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 320ms;
  }
`;

export const Notice = styled.div`
margin-top: 0.5rem;
margin-bottom: 2rem;
padding: 1.2rem 2rem 1rem 2rem;
background-color: #eee;
display: flex;
align-items: center;
gap: 2rem;
i {
  font-size: 24px;
  color: #222;
}
`;