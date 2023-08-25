import Image from "next/image";
import styles from "./styles.module.scss";

export default function CopyrightArea() {
  return (
    <div className={styles.container}>
      <p>
        Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
        imagens são de propriedade de seus respectivos donos. É vedada a
        reprodução, total ou parcial, de qualquer conteúdo sem expressa
        autorização.
      </p>
      <Image
        src="/econverse_vtex.svg"
        width={226.084}
        height={32}
        alt="Econverse e Vtex logos"
      />
    </div>
  );
}
