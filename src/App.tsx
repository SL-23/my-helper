import logo from "./logo.svg";
import styles from "./App.module.css";
import Rename from "./components/Rename";

const App = () => {
  return (
    <div class={styles.App}>
      <Rename />
    </div>
  );
};

export default App;
