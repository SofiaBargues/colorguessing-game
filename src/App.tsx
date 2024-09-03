import { useState } from "react";
import "./App.css";

function elementRandom(elementos: string[]) {
  const indiceAleatorioElemento = Math.floor(Math.random() * elementos.length);
  return elementos[indiceAleatorioElemento];
}

function colorRandom() {
  const colorsHex = [
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FFA500",
    "#800080",
  ];
  return elementRandom(colorsHex);
}

function App() {
  const [button1, setButton1] = useState(colorRandom());
  const [button2, setButton2] = useState(colorRandom());
  const [button3, setButton3] = useState(colorRandom());
  const [isCorrect, setIsCorrect] = useState("");

  const arrButtons = [button1, button2, button3];

  const [winnerColor, setWinnerColor] = useState(elementRandom(arrButtons));

  const mainColor = winnerColor;

  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          backgroundColor: winnerColor,
        }}
        className={"h-[100px] w-[100px] " + mainColor}
      ></div>
      <div>
        <button
          onClick={() => {
            if (button1 === mainColor) {
              setIsCorrect("true");
            } else {
              setIsCorrect("false");
            }
          }}
          className="bg-slate-300 m-3"
        >
          {button1}
        </button>
        <button
          className="bg-slate-300 m-3"
          onClick={() => {
            if (button2 === mainColor) {
              setIsCorrect("true");
            } else {
              setIsCorrect("false");
            }
            console.log(isCorrect);
          }}
        >
          {button2}
        </button>
        <button
          className="bg-slate-300 m-3"
          onClick={() => {
            if (button3 === mainColor) {
              setIsCorrect("true");
            } else {
              setIsCorrect("false");
            }
          }}
        >
          {button3}
        </button>
      </div>
      <div>{isCorrect}</div>
    </div>
  );
}

export default App;
