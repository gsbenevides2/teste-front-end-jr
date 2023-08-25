import Image from "next/image";
import ButtonComponent from "../Button";
import styles from "./styles.module.scss";

export interface Product {
  productName: string;
  price: number;
  photo: string;
  descriptionShort: string;
}

export interface ProductItemProps extends Product {
  onClick?: (product: Product) => void;
}

export default function ProductItem(props: ProductItemProps) {
  const producOldPrice = props.price * 1.2;
  const productParcelPrice = props.price / 2;
  return (
    <div className={styles.container} onClick={() => props.onClick?.(props)}>
      <Image
        className={styles.image}
        src={props.photo}
        alt={props.productName}
        width={247}
        height={228}
      />
      <p className={styles.description}>{props.descriptionShort}</p>
      <span className={styles.originalPrice}>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(producOldPrice)}
      </span>
      <span className={styles.newPrice}>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(props.price)}
      </span>
      <span className={styles.installment}>
        ou 2x de{" "}
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(productParcelPrice)}{" "}
        sem juros
      </span>
      <span className={styles.freeShipping}>Frete grátis</span>
      <ButtonComponent
        onClick={() => props.onClick?.(props)}
        className={styles.button}
      >
        Comprar
      </ButtonComponent>
    </div>
  );
}
