import { useState } from "react";

import Btn from "./Btn";
// import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="
      w-screen 
      h-screen"
      style={{ backgroundColor: color }}
    >
      <h1
        className="
        text-white 
        text-center 
        text-4xl 
        font-bold"
      >
        BG Changer
      </h1>

      <div
        className="
        fixed 
        flex 
        flex-wrap 
        justify-center 
        bottom-12 
        px-2 
        inset-x-0"
      >
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setColor("rgb(220 38 38)")}
            className="text-white font-semibold outline-none px-4 rounded-md bg-red-600"
          >
            RED
          </button>
          <button
            onClick={() => setColor("rgb(22 163 74)")}
            className="text-white font-semibold outline-none px-4 rounded-md bg-green-600"
          >
            GREEN
          </button>
          <button
            onClick={() => setColor("rgb(37 99 235)")}
            className="text-white font-semibold outline-none px-4 rounded-md bg-blue-600"
          >
            BLUE
          </button>
          <button
            onClick={() => setColor("black")}
            className="text-white font-semibold outline-none px-4 rounded-md bg-black"
          >
            BLACK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
