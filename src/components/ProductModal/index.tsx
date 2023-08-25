"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { PiMinusBold, PiPlusBold, PiXBold } from "react-icons/pi";
import { Lato, Montserrat } from "next/font/google";
import ButtonComponent from "../Button";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Product } from "../ProductItem";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

interface ProductModalContextType {
  product?: Product;
  setProduct?: React.Dispatch<React.SetStateAction<Product | undefined>>;
}
const ProductModalContext = createContext<ProductModalContextType>({});

interface ProductModalProviderProps {
  children: React.ReactNode;
}

export default function ProductModalProvider({
  children,
}: ProductModalProviderProps) {
  const [product, setProduct] = useState<Product>();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [qtd, setQtd] = useState<number>(1);
  const handleModalClose = useCallback(() => {
    document.body.style.overflow = "auto";
    if (backgroundRef.current) backgroundRef.current.style.opacity = "0";
    setTimeout(() => {
      if (backgroundRef.current) backgroundRef.current.style.display = "none";
      setProduct(undefined);
    }, 300);
  }, [backgroundRef]);

  const handleProductChange = useCallback(
    async (product?: Product) => {
      if (product && backgroundRef.current) {
        document.body.style.overflow = "hidden";
        backgroundRef.current.style.display = "flex";
        await new Promise((resolve) => setTimeout(resolve, 100));
        backgroundRef.current.style.opacity = "1";
      } else if (backgroundRef.current) {
        document.body.style.overflow = "auto";
        backgroundRef.current.style.opacity = "0";
        setTimeout(() => {
          if (backgroundRef.current)
            backgroundRef.current.style.display = "none";
        }, 300);
      }
    },
    [backgroundRef]
  );

  // Alinhar o background com o scroll atual
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      backgroundRef.current?.style.setProperty("top", `${top}px`);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [backgroundRef]);

  useEffect(() => {
    handleProductChange(product);
  }, [product, handleProductChange]);

  return (
    <ProductModalContext.Provider value={{ product, setProduct }}>
      {children}
      <div className={styles.background} ref={backgroundRef}>
        <div className={styles.container}>
          <Image
            src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
            width={247}
            height={192.199}
            alt="iPhone"
          />
          <div className={styles.productDetails}>
            <h1 className={lato.className}>{product?.productName ?? ""}</h1>
            <h2>
              {product?.price
                ? Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)
                : ""}
            </h2>
            <p className={[styles.description, lato.className].join(" ")}>
              {product?.descriptionShort ?? ""}
            </p>
            <a className={lato.className}>Veja mais detalhes do produto &gt;</a>
            <div className={styles.qtdSelector}>
              <PiMinusBold
                className={styles.minusOrPlus}
                onClick={() => setQtd((qtd) => Math.max(qtd - 1, 1))}
              />
              <input
                type="number"
                value={qtd}
                min={1}
                onChange={(e) => setQtd(Math.max(Number(e.target.value), 1))}
                className={montserrat.className}
              />
              <PiPlusBold
                className={styles.minusOrPlus}
                onClick={() => setQtd((qtd) => qtd + 1)}
              />
            </div>
            <ButtonComponent className={styles.button}>Comprar</ButtonComponent>
          </div>
          <PiXBold className={styles.close} onClick={handleModalClose} />
        </div>
      </div>
    </ProductModalContext.Provider>
  );
}

export function useOpenModal() {
  const { setProduct } = useContext(ProductModalContext);
  return setProduct ?? ((product?: Product) => {});
}
