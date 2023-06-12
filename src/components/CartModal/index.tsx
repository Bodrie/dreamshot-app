import React, { useContext, useRef } from "react";
import OverlayContainer from "../OverlayContainer";
import Cart from "../Cart";
import styles from "./CartModal.module.scss";
import useClickOutside from "../../hooks/useClickOutside";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../../types";
import removeIcon from "../../assets/remove_icon.png";

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
  const {
    modal,
    listElement,
    ulElement,
    listElement__total,
    listElement__price,
    listElement__removeItem,
  } = styles;

  const { cartState, totalAmount, setCartState, setTotalAmount } =
    useContext(CartContext);
  const modalRef = useRef(null);

  const handleItemRemove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
    item: CartItem
  ) => {
    e.stopPropagation();
    const copyOfCartState = [...cartState];
    copyOfCartState.splice(index, 1);
    setCartState(copyOfCartState);
    setTotalAmount(totalAmount - item.price);
  };

  useClickOutside(modalRef, () => {
    if (modalOpen) setModalOpen(false);
  });

  useDisableBodyScroll(modalOpen);

  return (
    <>
      {modalOpen && (
        <OverlayContainer>
          <div ref={modalRef} className={modal}>
            <ul className={ulElement}>
              {!cartState.length && "Your cart is still empty."}
              {cartState.map((item: CartItem, index: number) => {
                return (
                  <li className={listElement} key={`${item.name}-${index}`}>
                    <p>{item.name}</p>
                    <div className={listElement__price}>
                      <p>
                        <span>$</span> {item.price.toFixed(2)}
                      </p>
                      <button
                        className={listElement__removeItem}
                        onClick={(e) => handleItemRemove(e, index, item)}
                      >
                        <img
                          src={removeIcon}
                          alt="Remove item"
                          width={15}
                          height={15}
                        />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={listElement__total}>
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
        </OverlayContainer>
      )}
    </>
  );
};

export default CartModal;
