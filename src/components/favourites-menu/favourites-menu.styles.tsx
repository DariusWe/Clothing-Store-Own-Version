import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  overflow-y: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    padding: 3px 8px;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    //border-radius: 0;
    &:nth-child(3) {
        margin-top: 20px;
    }
  }
`;

export const Label = styled.span`
  display: inline-block;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 600;
  color: #222;
`;

export const Notice = styled.div`
margin-top: 5px;
margin-bottom: 20px;
padding: 12px 20px 10px 20px;
background-color: #eee;
display: flex;
align-items: center;
gap: 20px;
i {
  font-size: 24px;
  color: #222;
}
`;