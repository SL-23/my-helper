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
                console.log(sentenceCase());
              }}
            />
          </Container>
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
