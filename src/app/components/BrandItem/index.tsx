import Image from "next/image";
import styles from "./styles.module.scss";

export default function BrandItem() {
  return (
    <button className={styles.container}>
      <Image src="/vtex_logo.svg" alt="Logo" width={172} height={62.664} />
    </button>
  );
}
