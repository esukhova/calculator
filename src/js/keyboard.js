
import { BUTTONS } from "./consts";

export const createKeyboard = () => {
    const buttonsSymbols = BUTTONS;
    const buttonsHTML = buttonsSymbols.reduce((acc, curr) => {
      return acc + `<button id="symbol_${curr}" class="button">${curr}</button>`;
    }, "");
  
    calculator.innerHTML += buttonsHTML;
  
    document.getElementById("symbol_ ").id = "mode";
    document.getElementById("symbol_+").id = "plus";
    document.getElementById("symbol_—").id = "minus";
    document.getElementById("symbol_+-").id = "plusminus";
    document.getElementById("symbol_÷").id = "division";
    document.getElementById("symbol_=").id = "equal";
    document.getElementById("symbol_%").id = "percent";
    document.getElementById("symbol_x").id = "x";
    document.getElementById("symbol_AC").id = "AC";
  
    const indices = [
      "plus",
      "minus",
      "plusminus",
      "division",
      "equal",
      "percent",
      "x",
      "AC",
    ];
  
    indices.forEach((i) =>
      document.getElementById(`${i}`).classList.add("operator")
    );
  };