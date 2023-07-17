import "../css/style.css";
import { createKeyboard } from "./keyboard";
import { changeMode } from "./mode";
import { calculation } from "./calculator";

const calculator = document.getElementById("calculator");

createKeyboard();

changeMode();

calculation();
