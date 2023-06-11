import React, { useContext, useRef } from "react";
import Cart from "../Cart";
import styles from "./CartModal.module.scss";
import useClickOutside from "../../hooks/useClickOutside";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../../types";

interface CartModalProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  setSuccModalOpen: (succModalOpen: boolean) => void;
}

const CartModal = ({
  modalOpen,
  setModalOpen,
  setSuccModalOpen,
}: CartModalProps) => {
  const { modal, listElement, ulElement, modalContainer } = styles;
  const { cartState, totalAmount } = useContext(CartContext);
  const modalRef = useRef(null);

  useClickOutside(modalRef, () => {
    if (modalOpen) setModalOpen(false);
  });

  useDisableBodyScroll(modalOpen);

  return (
    <>
      {modalOpen && (
        <div className={modalContainer}>
          <div ref={modalRef} className={modal}>
            <ul className={ulElement}>
              {!cartState.length && "Your cart is still empty."}
              {cartState.map((item: CartItem, index: number) => {
                return (
                  <li className={listElement} key={`${item.name}-${index}`}>
                    <p>{item.name}</p>
                    <p>
                      <span>$</span> {item.price.toFixed(2)}
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className={listElement}>
              <p>Total</p>
              <p>
                <span>$</span> {totalAmount.toFixed(2)}
              </p>
            </div>
          </div>
          <Cart
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setSuccModalOpen={setSuccModalOpen}
          />
        </div>
      )}
    </>
  );
};

export default CartModal;
