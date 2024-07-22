import { useState } from "react";
import NumberFall from "../reusable/numberFall/NumberFall";
import "./Homepage.css";
import IncDecBtn from "../reusable/IncrementDecrementBtn/IncDecBtn";

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}

const Homepage = () => {

  const [bgInputColor, setbgInputColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.04)");
  const [dropColor, setDropColor] = useState("#ffffff");
  const [dropFontSize, setDropFontSize] = useState(15);
  const [dropSpeed, setDropSpeed] = useState(20);

  //   for Bg color
  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setbgInputColor(newColor);
    const crColor = hexToRGB(newColor, 0.04);
    setBgColor(crColor);
  };

  //   for text color
  const handleTextColor = (e) => {
    setDropColor(e.target.value);
  };

  return (
    <>
      <NumberFall
        customStyle="h-screen absolute left-0 top-0 w-screen -z-10"
        dropsColor={dropColor}
        dropSize={dropFontSize}
        dropsBG={bgColor}
        dropSpeed={dropSpeed}
      />

      <div className="bg-white w-fit">
        <div>
          <input
            id="bgColor"
            type="color"
            value={bgInputColor}
            onChange={handleColorChange}
          />
          <label htmlFor="bgColor">Metrix Bg color</label>
        </div>

        <div>
          <input
            id="textColor"
            type="color"
            value={dropColor}
            onChange={handleTextColor}
          />
          <label htmlFor="textColor">Metrix Text color</label>
        </div>

        <IncDecBtn
          value={dropFontSize}
          onIncrement={() => setDropFontSize(dropFontSize + 1)}
          onDecrement={() => setDropFontSize(dropFontSize <= 1 ? 1 : dropFontSize - 1)}
          textLable="Font Size"
        />

        <IncDecBtn
          value={dropSpeed}
          onIncrement={() => setDropSpeed(dropSpeed <= 1 ? 1 : dropSpeed - 1)}
          onDecrement={() => setDropSpeed(dropSpeed + 1)}
          textLable="Speed"
        />
      </div>
    </>
  );
};

export default Homepage;
