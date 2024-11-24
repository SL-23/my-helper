import { Button, Box, Grid, Paper, TextField } from "@suid/material";
import { createSignal } from "solid-js";
import styled from "@suid/system/styled";
import CopyButton from "../CopyButton";
import {
  toSentenceCase,
  toSnakeCase,
  toCamelCase,
  toKebabCase,
} from "./helpers";
import ResultContainer from "./ResultContainer";

const Rename = () => {
  const [val, setVal] = createSignal("");
  const [sentenceCase, setSentenceCase] = createSignal("");
  const [snakeCase, setSnakeCase] = createSignal("");
  const [camelCase, setCamelCase] = createSignal("");
  const [kebabCase, setKebabCase] = createSignal("");

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
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
        </Grid>
        <ResultContainer title="Sentence case" value={sentenceCase()} />
        <ResultContainer title="Snake case" value={snakeCase()} />
        <ResultContainer title="Camel case" value={camelCase()} />
        <ResultContainer title="Kebab case" value={kebabCase()} />
      </Grid>
    </Box>
  );
};

export default Rename;
