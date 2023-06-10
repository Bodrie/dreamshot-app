import React from "react";
import { Header, Text, ProductSlider, Cart } from "./components";
import styles from "./App.module.scss";

function App() {
  const { App } = styles;

  return (
    <div className={App}>
      <Header />
      <Text />
      <ProductSlider />
      <Cart />
    </div>
  );
}

export default App;
