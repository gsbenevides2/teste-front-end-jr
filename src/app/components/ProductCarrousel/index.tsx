"use client";
import ProductItem, { Product } from "@/components/ProductItem";
import styles from "./styles.module.scss";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useRef } from "react";
import { useOpenModal } from "@/components/ProductModal";
interface ProductCarrouselProps {
  products: Product[];
}

export default function ProductCarrousel(props: ProductCarrouselProps) {
  const carrouselRef = useRef<HTMLDivElement>(null);
  const openModal = useOpenModal();

  const handleScroll = (direction: "left" | "right") => {
    if (carrouselRef.current) {
      const scrollAmount = 350;
      const scrollDirection = direction === "left" ? -1 : 1;
      carrouselRef.current.scrollLeft += scrollAmount * scrollDirection;
    }
  };

  return (
    <div className={styles.container}>
      <PiCaretLeftBold
        className={styles.arrow}
        onClick={() => handleScroll("left")}
      />
      <div className={styles.products} ref={carrouselRef}>
        {props.products.map((product) => (
          <ProductItem
            key={product.productName}
            {...product}
            onClick={openModal}
          />
        ))}
      </div>
      <PiCaretRightBold
        className={styles.arrow}
        onClick={() => handleScroll("right")}
      />
    </div>
  );
}
