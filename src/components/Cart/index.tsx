import React from "react";
import styles from "./Cart.module.scss";
import cartIcon from "../../assets/add_to_cart.png";

const Cart = () => {
  const { cart, btn, cartImg, price } = styles;

  return (
    <div className={cart}>
      <img className={cartImg} src={cartIcon} alt="Cart icon" />
      <p className={price}>0.00$</p>
      <button className={btn}>Order Now</button>
    </div>
  );
};

export default Cart;
