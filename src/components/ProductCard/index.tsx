import React, { useContext } from "react";
import styles from "./ProductCard.module.scss";
import addToCartIcon from "../../assets/add_to_cart.png";
import { Product } from "../../types";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ image, name, caption, price }: Product) => {
  const {
    card,
    product,
    productImg,
    productImgContainer,
    captionStyle,
    priceStyle,
    btn,
    cartIcon,
  } = styles;

  const { cartState, setCartState, totalAmount, setTotalAmount } =
    useContext(CartContext);

  const handleAddItem = () => {
    setCartState([...cartState, { name, price }]);
    setTotalAmount(totalAmount + price);
  };

  return (
    <div className={card}>
      <div className={productImgContainer}>
        <img
          className={productImg}
          src={require(`../../assets/${image}`)}
          alt={name}
          draggable={false}
        />
      </div>
      <p className={product}>{name}</p>
      <p className={captionStyle}>{caption}</p>
      <p className={priceStyle}>
        <span>$</span> {price.toFixed(2)}
      </p>
      <button className={btn} onClick={handleAddItem}>
        <img
          className={cartIcon}
          src={addToCartIcon}
          alt="Add to cart button"
        />
      </button>
    </div>
  );
};

export default ProductCard;
