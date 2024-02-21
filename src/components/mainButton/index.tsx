import * as C from "./styles";
import icondice from "../../images/icon-dice.svg";
import { MainSquare } from '../mainSquare';
import axios from "axios";
import { useState } from "react";
export const MainButton = () => {
  //Set a state get and set both ID, Slip 
  const [slipID, setSlipId] = useState("");
  const [slipAdvice, setSlipAdvice] = useState("");
  //Set the value that comes from the API
  const getAdivace = () => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setSlipId(response.data.slip.id)
      setSlipAdvice(response.data.slip.advice)
    });
  };

  //show and send the data for the main square, as well show the button to change the slip
  return (
    <>
    <MainSquare id={slipID} slip={slipAdvice}/>
      <C.container onClick={getAdivace}>
        <img src={icondice} alt="Dice icon" />
      </C.container>
    </>
  );
};
