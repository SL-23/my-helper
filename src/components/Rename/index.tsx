import { Button, Box, Grid, Paper, TextField } from "@suid/material";
import { createSignal } from "solid-js";
import styled from "@suid/system/styled";

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

const Container = styled("div")(({ theme }) => ({
  minHeight: 96,
  borderRadius: 12,
  border: "1px solid grey",
}));

const Rename = () => {
  const [val, setVal] = createSignal("");
  const [sentenceCase, setSentenceCase] = createSignal("");
  const [snakeCase, setSnakeCase] = createSignal("");
  const [camelCase, setCamelCase] = createSignal("");
  const [kebabCase, setKebabCase] = createSignal("");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Container>
            <TextField
              value={val()}
              onChange={(e) => {
                const inputValue = e.target.value;
                setVal(inputValue);
                setSentenceCase(toSentenceCase(inputValue));
                setSnakeCase(toSnakeCase(inputValue));
                setCamelCase(toCamelCase(inputValue));
                setKebabCase(toKebabCase(inputValue));
              }}
            />
          </Container>
        </Grid>
        <Grid item xs={6} md={8}>
          <Container>
            <p>Sentence case</p>
            <code>{sentenceCase()}</code>
          </Container>
        </Grid>
        <Grid item xs={6} md={8}>
          <Container>
            <p>snake_case</p>
            <code>{snakeCase()}</code>
          </Container>
        </Grid>
        <Grid item xs={6} md={8}>
          <Container>
            <p>camelCase</p>
            <code>{camelCase()}</code>
          </Container>
        </Grid>
        <Grid item xs={6} md={8}>
          <Container>
            <p>kebab-case</p>
            <code>{kebabCase()}</code>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Rename;
