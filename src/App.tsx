import React from "react";
import { Header, Text } from "./components";
import styles from "./App.module.scss";

function App() {
  const { App } = styles;
  return (
    <div className={App}>
      <Header />
      <Text />
    </div>
  );
}

export default App;
