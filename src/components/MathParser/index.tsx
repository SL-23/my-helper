import { createSignal } from "solid-js";
import stringMath from "string-math";

const MathParser = () => {
  const [textVal, setTextVal] = createSignal("");
  return (
    <div>
      <textarea
        value={textVal()}
        oninput={(e) => {
          const inputVal = e.target.value;
          const length = inputVal.length;
          const allLines = inputVal.split("\n");
          const lastLine = allLines[allLines.length - 1];
          if (
            lastLine.length > 2 &&
            inputVal.charAt(length - 1) === " " &&
            inputVal.charAt(length - 2) === "="
          ) {
            const lastEquation = lastLine.slice(0, lastLine.length - 2);
            const mathRes = stringMath(lastEquation.replace("%", " * 0.01"));
            setTextVal(inputVal + mathRes);
          } else setTextVal(inputVal);
        }}
        style={{ width: "80vw", height: "30vh" }}
      ></textarea>
    </div>
  );
};

export default MathParser;
