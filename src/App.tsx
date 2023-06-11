import React, { useState } from "react";
import { Header, Text, ProductSlider, Cart, CartModal } from "./components";
import styles from "./App.module.scss";

function App() {
  const { App } = styles;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={App}>
      <CartModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Header />
      <Text />
      <ProductSlider />
      {!modalOpen && <Cart setModalOpen={setModalOpen} />}
    </div>
  );
}

export default App;
