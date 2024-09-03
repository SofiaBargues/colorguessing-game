import { useState } from "react";
import "./App.css";

function elementRandom(elementos: string[]) {
  const indiceAleatorioElemento = Math.floor(Math.random() * elementos.length);
  return elementos[indiceAleatorioElemento];
}

function colorRandom() {
  const randomColor = Math.floor(Math.random() * 16777216);
  const hexColor = "#" + randomColor.toString(16).padStart(6, "0");

  return hexColor;
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
    <div className="flex flex-col items-center min-h-screen justify-center gap-5">
      <div
        style={{
          backgroundColor: winnerColor,
        }}
        className={"h-[400px] w-[400px] rounded-lg " + mainColor}
      ></div>
      <div>
        <button
          onClick={() => {
            if (button1 === mainColor) {
              setIsCorrect("Correct");
            } else {
              setIsCorrect("Incorrect");
            }
          }}
          className="bg-[#f1f1f1] m-1 px-2 rounded-sm border-[1px] border-[#c3c3c3]"
        >
          {button1}
        </button>
        <button
          className="bg-[#f1f1f1] m-1 px-2 rounded-sm border-[1px] border-[#c3c3c3]"
          onClick={() => {
            if (button2 === mainColor) {
              setIsCorrect("Correct");
            } else {
              setIsCorrect("Incorrect");
            }
            console.log(isCorrect);
          }}
        >
          {button2}
        </button>
        <button
          className="bg-[#f1f1f1] m-1 px-2 rounded-sm border-[1px] border-[#c3c3c3]"
          onClick={() => {
            if (button3 === mainColor) {
              setIsCorrect("Correct");
            } else {
              setIsCorrect("Incorrect");
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
