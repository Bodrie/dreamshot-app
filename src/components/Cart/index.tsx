import React, { useState } from "react";
import styles from "./Cart.module.scss";
import cartIcon from "../../assets/add_to_cart.png";

interface CartProps {
  setModalOpen?: (modalOpen: boolean) => void;
}

const Cart = ({ setModalOpen }: CartProps) => {
  const { cart, btn, cartImg, price, shadow } = styles;

  return (
    <div className={`${cart} ${!setModalOpen && shadow}`}>
      <img
        className={cartImg}
        src={cartIcon}
        alt="Cart icon"
        onClick={(e) => {
          e.stopPropagation();
          if (setModalOpen) setModalOpen(true);
        }}
      />
      <p className={price}>0.00$</p>
      <button className={btn}>Order Now</button>
    </div>
  );
};

export default Cart;
