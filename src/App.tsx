import logo from "./logo.svg";
import styles from "./App.module.css";
import NameCard from "./components/NameCard";

const App = () => {
  return (
    <div class={styles.App}>
      <NameCard />
    </div>
  );
};

export default App;
