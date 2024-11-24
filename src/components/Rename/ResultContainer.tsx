import { Grid, Container } from "@suid/material";
import CopyButton from "../CopyButton";
import { toSnakeCase } from "./helpers";

interface ResultContainerProps {
  title: string;
  value: string;
}
// can't be destructured : https://github.com/solidjs/solid/discussions/749
const ResultContainer = (props: ResultContainerProps) => {
  const elementId = toSnakeCase(props.title);
  console.log(props.value);
  return (
    <Grid item xs={6} md={8}>
      <Container>
        <p>{props.title}</p>
        <code id={elementId}>{props.value}</code>
        <CopyButton elementId={elementId} />
      </Container>
    </Grid>
  );
};

export default ResultContainer;
