import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function FirstAreaAbout() {
  return (
    <nav className={styles.navigation}>
      <span className={styles.title}>Sobre Nós</span>
      <ol>
        <li>Conheça</li>
        <li>Como Comprar</li>
        <li>Indicação e Desconto</li>
      </ol>
      <ol className={styles.social}>
        <li>
          <FaFacebookF className={styles.icon} />
        </li>
        <li>
          <FaInstagram className={styles.icon} />
        </li>
        <li>
          <FaYoutube className={styles.icon} />
        </li>
      </ol>
    </nav>
  );
}
