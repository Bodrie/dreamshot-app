import React from "react";
import styles from "./Text.module.scss";

const Text = () => {
  const { heading, description } = styles;

  return (
    <>
      <h1 className={heading}>
        The fastest brunch delivery in <span>Your city</span>
      </h1>
      <p className={description}>
        This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
        about you ?
      </p>
    </>
  );
};

export default Text;
