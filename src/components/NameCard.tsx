import { createSignal } from "solid-js";

const toSentenceCase = (input: string) => {
  if (!input) return "";

  // Trim whitespace and ensure the first letter is uppercase
  const trimmedInput = input.trim();
  return (
    trimmedInput.charAt(0).toUpperCase() + trimmedInput.slice(1).toLowerCase()
  );
};

const toCamelCase = (input: string) => {
  if (!input) return "";

  return input
    .trim() // Remove leading and trailing whitespace
    .split(/[\s_\-]+/) // Split the string by spaces, underscores, or hyphens
    .map(
      (word, index) =>
        index === 0
          ? word.toLowerCase() // Keep the first word lowercase
          : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize subsequent words
    )
    .join(""); // Join all words into a single string
};

const toSnakeCase = (input: string) => {
  if (!input) return "";

  return input
    .trim() // Remove leading and trailing whitespace
    .replace(/([a-z])([A-Z])/g, "$1_$2") // Handle camelCase to snake_case
    .replace(/[\s\-]+/g, "_") // Replace spaces or hyphens with underscores
    .toLowerCase(); // Convert the entire string to lowercase
};

const toAllCaps = (input: string) => {
  if (!input) return "";

  return input.trim().toUpperCase();
};
const NameCard = () => {
  const [val, setVal] = createSignal("");
  const [sentenceCase, setSentenceCase] = createSignal("...");
  const [snakeCase, setSnakeCase] = createSignal("...");
  const [camelCase, setCamelCase] = createSignal("...");
  const [allCaps, setAllCaps] = createSignal("...");

  return (
    <div>
      <input
        value={val()}
        onChange={(e) => {
          const inputValue = e.target.value;
          setVal(inputValue);
          setSentenceCase(toSentenceCase(inputValue));
          setSnakeCase(toSnakeCase(inputValue));
          setCamelCase(toCamelCase(inputValue));
          setAllCaps(toAllCaps(inputValue));
        }}
      />
      <div
        style={{
          margin: "16px",
          padding: "16px",
          border: "1px solid grey",
          "border-radius": "8px",
          gap: "8px",
        }}
      >
        <p>Sentence case</p>
        <p>{sentenceCase()}</p>
      </div>
      <div
        style={{
          margin: "16px",
          padding: "16px",
          border: "1px solid grey",
          "border-radius": "8px",
          gap: "8px",
        }}
      >
        snake_case
        <p>{snakeCase()}</p>
      </div>
      <div
        style={{
          margin: "16px",
          padding: "16px",
          border: "1px solid grey",
          "border-radius": "8px",
          gap: "8px",
        }}
      >
        camelCase
        <p>{camelCase()}</p>
      </div>
      <div
        style={{
          margin: "16px",
          padding: "16px",
          border: "1px solid grey",
          "border-radius": "8px",
          gap: "8px",
        }}
      >
        ALLCAPS
        <p>{allCaps()}</p>
      </div>
    </div>
  );
};

export default NameCard;
