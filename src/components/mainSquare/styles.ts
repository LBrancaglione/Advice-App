import styled from "styled-components";

export const squarePosition = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const squareStyle = styled.div`
  width: 600px;
  height: 350px;
  background-color: rgb(49, 58, 73);
  border-radius: 20px;
`;

export const squareText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10%;

  img{
    position: relative;
    bottom: 0;
  }
`;

export const text = styled.div`
  h1 {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 12px;
    letter-spacing: 5px;
    color: rgb(79, 239, 162);
  }

  .textBox {
    padding-top: 5%;
    p {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 25px;
      height: 150px;
      overflow: auto;
      color: white;
    }
  }
`;


