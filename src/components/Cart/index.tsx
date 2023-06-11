import React, { useContext } from "react";
import styles from "./Cart.module.scss";
import cartIcon from "../../assets/add_to_cart.png";
import { CartContext } from "../../context/CartContext";

interface CartProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  setSuccModalOpen: (succModalOpen: boolean) => void;
}

const Cart = ({ setModalOpen, setSuccModalOpen, modalOpen }: CartProps) => {
  const { cart, btn, cartImg, price, shadow } = styles;
  const { setCartState, totalAmount, setTotalAmount } = useContext(CartContext);

  return (
    <div className={`${cart} ${modalOpen && shadow}`}>
      <img
        className={cartImg}
        src={cartIcon}
        alt="Cart icon"
        onClick={(e) => {
          e.stopPropagation();
          if (setModalOpen) setModalOpen(true);
        }}
      />
      <p className={price}>{totalAmount.toFixed(2)}$</p>
      <button
        className={btn}
        onClick={(e) => {
          e.stopPropagation();
          setModalOpen(false);
          setSuccModalOpen(true);
          setCartState([]);
          setTotalAmount(0);
        }}
      >
        Order Now
      </button>
    </div>
  );
};

export default Cart;
