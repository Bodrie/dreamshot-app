import React, { useRef } from "react";
import ProductCard from "../ProductCard";
import styles from "./ProductSlider.module.scss";
import data from "../../mock/data.json";
import { Product } from "../../types";
import { useDragToSlide } from "../../hooks/useDragToSlide";

const ProductSlider = () => {
  const { sliderContainer, slider } = styles;
  const products: Product[] = data.items;

  const sliderRef = useRef<HTMLDivElement | null>(null);
  useDragToSlide(sliderRef, false);

  return (
    <div ref={sliderRef} className={slider}>
      <div className={sliderContainer}>
        {products.map((product, index) => (
          <ProductCard key={`${product.name}-${index}`} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
