import React from "react";
import { Header } from "./components";
import styles from "./App.module.scss";

function App() {
  const { App } = styles;
  return (
    <div className={App}>
      <Header />
    </div>
  );
}

export default App;
