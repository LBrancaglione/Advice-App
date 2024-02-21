import styled from "styled-components";

export const container = styled.div`
  position: absolute;
  bottom: 120px;
  left: 0;
  right: 0;
  margin: auto;
  width: 60px;
  height: 60px;
  background: rgb(83,255,171);
  border-radius: 30px;
  :hover{
    box-shadow: 0px 0px 15px 6px #3A7164;
    cursor: pointer;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
