import React from "react";
import ProductCard from "../ProductCard";
import styles from "./ProductSlider.module.scss";
import data from "../../mock/data.json";
import { Product } from "../../types";

const ProductSlider = () => {
  const {sliderContainer, slider } = styles;
  const products: Product[] = data.items;

  return (
    <div className={slider}>
      <div className={sliderContainer}>
        {products.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
