import React, { useState } from "react";

function Btn(props) {
    const [color, setColor] = useState("black")
  return (
    <button
      onClick={() => setColor("green")}
      className="text-white font-semibold outline-none px-4 rounded-md bg-red-600"
    >
      green
    </button>
  );
}

export default Btn;
