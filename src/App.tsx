import React, { useState } from "react";
import {
  Header,
  Text,
  ProductSlider,
  Cart,
  CartModal,
  SuccessfulModal,
  Container,
} from "./components";
import CartProvider from "./context/CartProvider";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [succModalOpen, setSuccModalOpen] = useState(false);

  return (
    <div>
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
        <Container>
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
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
