import Image from "next/image";
import ButtonComponent from "../Button";
import styles from "./styles.module.scss";
export default function ProductItem() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
        alt="iPhone"
        width={247}
        height={228}
      />
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <span className={styles.originalPrice}>R$ 1.000,00</span>
      <span className={styles.newPrice}>R$ 1.000,00</span>
      <span className={styles.installment}>ou 2x de R$ 49,95 sem juros</span>
      <span className={styles.freeShipping}>Frete grátis</span>
      <ButtonComponent className={styles.button}>Comprar</ButtonComponent>
    </div>
  );
}
