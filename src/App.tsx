import { useState } from "react";
import "./App.css";

function App() {
  const [button1, setButton1] = useState("black");
  const [button2, setButton2] = useState("violet-900");
  const [button3, setButton3] = useState("orange-400");
  const [isCorrect, setIsCorrect] = useState("");

  const mainColor = "black";

  return (
    <div className="flex flex-col items-center">
      <div className={"h-[100px] w-[100px] bg-black [" + mainColor + "]"}></div>
      <div>
        <button
          onClick={() => {
            if (button1 === mainColor) {
              setIsCorrect("true");
            } else {
              setIsCorrect("false");
            }
            console.log(isCorrect);
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
