import logo from "./logo.svg";
import styles from "./App.module.css";
import Rename from "./components/Rename";
import MathParser from "./components/MathParser";

const App = () => {
  return (
    <div class={styles.App}>
      <Rename />
      <MathParser />
    </div>
  );
};

export default App;
