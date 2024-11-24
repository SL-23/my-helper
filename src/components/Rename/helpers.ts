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

const toKebabCase = (input: string) => {
  if (!input) return "";

  return input
    .trim() // Remove leading and trailing whitespace
    .replace(/([a-z])([A-Z])/g, "$1_$2") // Handle camelCase to snake_case
    .replace(/[\s\-]+/g, "-") // Replace spaces or hyphens with underscores
    .toLowerCase(); // Convert the entire string to lowercase
};

export { toSnakeCase, toCamelCase, toSentenceCase, toKebabCase };
