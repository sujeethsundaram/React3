import "./App.css";
import { useState } from "react";
import Button from "./ColorPicker.js";
import colors from "./colors.json";

export default function App() {
  const [color, setColor] = useState("white");
  const [showColors, setShowColors] = useState(true);

  const handlePickColorClick = () => {
    setShowColors(true);
  };

  return (
    <div className="container">
      <h1>Color Picker</h1>
      <div className={`App ${color}`}>
        {showColors && (
          <div className="color-buttons">
            {colors.map((c) => {
              return <Button key={c.color} color={c.color} setColor={setColor} setShowColors={setShowColors} />;
            })}
          </div>
        )}

        {color !== "white" && (
          <button className="pick-color-button" onClick={handlePickColorClick}>
            Pick a color
          </button>
        )}
      </div>
    </div>
  );
}
