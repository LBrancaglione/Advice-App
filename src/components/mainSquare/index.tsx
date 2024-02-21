import * as C from "./styles";
import { FunctionComponent } from "react";
import patterdivaderdesktop from '../../images/pattern-divider-desktop.svg'

//interface to receive the data from the button components, that has the data fron the API
interface MainSquareProps{
  id : String,
  slip : String
}

//Show the data recived from Main Button
export const MainSquare: FunctionComponent<MainSquareProps> = (MainSquareProps) => {
  return (
    <>
      <C.squarePosition>
        <C.squareStyle>
          <C.squareText>
            <C.text>
              <h1>ADVICE #{MainSquareProps.id}</h1>
              <div className="textBox">
                <p>
                 {MainSquareProps.slip}
                </p>
              </div>
            </C.text>
            <img src={patterdivaderdesktop} alt="Patter divader" />
          </C.squareText>
        </C.squareStyle>
      </C.squarePosition>
    </>
  );
};
