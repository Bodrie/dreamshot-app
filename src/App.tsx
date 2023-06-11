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
import CartProvider from "./context/CartProvider";

function App() {
  const { App } = styles;

  const [modalOpen, setModalOpen] = useState(false);
  const [succModalOpen, setSuccModalOpen] = useState(false);

  return (
    <div className={App}>
      <CartProvider>
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
      </CartProvider>
    </div>
  );
}

export default App;
