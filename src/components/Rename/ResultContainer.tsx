import { Grid, Container, Box } from "@suid/material";
import CopyButton from "../CopyButton";
import { toSnakeCase } from "./helpers";

interface ResultContainerProps {
  title: string;
  value: string;
}
// can't be destructured : https://github.com/solidjs/solid/discussions/749
const ResultContainer = (props: ResultContainerProps) => {
  const elementId = toSnakeCase(props.title);
  return (
    <Grid item xs={12} md={3}>
      <Container>
        <p>{props.title}</p>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <code id={elementId}>{props.value}</code>
          <CopyButton elementId={elementId} />
        </Box>
      </Container>
    </Grid>
  );
};

export default ResultContainer;
