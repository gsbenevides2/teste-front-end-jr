import Image from "next/image";
import styles from "./styles.module.scss";

export default function FirstAreaPayment() {
  return (
    <nav className={styles.navigation}>
      <span className={styles.title}>FORMAS DE PAGAMENTO</span>
      <Image
        src="/formas_pagamento.svg"
        width={192}
        height={148.545}
        alt="Formas de pagamento: Visa, Elo, Alelo, Dinners Club, Ifood, MasterCard, PIX, Americam Express, Ticket e Sodexo."
      />
    </nav>
  );
}
