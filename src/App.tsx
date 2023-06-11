import React, { useState } from "react";
import {
  Header,
  Text,
  ProductSlider,
  Cart,
  CartModal,
  SuccessfulModal,
} from "./components";
import styles from "./App.module.scss";

function App() {
  const { App } = styles;
  const [modalOpen, setModalOpen] = useState(false);
  const [succModalOpen, setSuccModalOpen] = useState(false);

  return (
    <div className={App}>
      <SuccessfulModal
        succModalOpen={succModalOpen}
        setSuccModalOpen={setSuccModalOpen}
      />
      <CartModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        setSuccModalOpen={setSuccModalOpen}
      />
      <Header />
      <Text />
      <ProductSlider />
      {!modalOpen && (
        <Cart
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setSuccModalOpen={setSuccModalOpen}
        />
      )}
    </div>
  );
}

export default App;
