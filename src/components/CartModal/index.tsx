import React, { useRef } from "react";
import Cart from "../Cart";
import styles from "./CartModal.module.scss";
import useClickOutside from "../../hooks/useClickOutside";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

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
              <li className={listElement}>
                <p>Butter Pancakes</p>
                <p>
                  <span>$</span> 14.50
                </p>
              </li>
              <li className={listElement}>
                <p>Butter Pancakes</p>
                <p>
                  <span>$</span> 14.50
                </p>
              </li>
              <li className={listElement}>
                <p>Butter Pancakes</p>
                <p>
                  <span>$</span> 14.50
                </p>
              </li>
            </ul>
            <div className={listElement}>
              <p>Total</p>
              <p>
                <span>$</span> 36.00
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
