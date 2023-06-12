import React, { useContext } from "react";
import Button from "../Button";
import styles from "./Cart.module.scss";
import cartIcon from "../../assets/add_to_cart.png";
import { CartContext } from "../../context/CartContext";

interface CartProps {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  setSuccModalOpen: (succModalOpen: boolean) => void;
}

const Cart = ({ setModalOpen, setSuccModalOpen, modalOpen }: CartProps) => {
  const { cart, btn, cartImg, price, shadow, disabled } = styles;
  const { setCartState, totalAmount, setTotalAmount } = useContext(CartContext);

  const handleOpenCart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const handlePlaceOrder = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setModalOpen(false);
    setSuccModalOpen(true);
    setCartState([]);
    setTotalAmount(0);
  };

  return (
    <div className={`${cart} ${modalOpen && shadow}`} onClick={handleOpenCart}>
      <img className={cartImg} src={cartIcon} alt="Cart icon" />
      <p className={price}>{totalAmount.toFixed(2)}$</p>
      <Button
        disabled={!totalAmount}
        className={`${btn} ${!totalAmount && disabled}`}
        onClick={handlePlaceOrder}
        text="Order Now"
      />
    </div>
  );
};

export default Cart;
