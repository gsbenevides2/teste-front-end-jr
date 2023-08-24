import styles from "./styles.module.scss";

export default function FirstAreaInformation() {
  return (
    <nav className={[styles.navigation, styles.information].join(" ")}>
      <span className={styles.title}>INFORMAÇÕES ÚTEIS</span>
      <ol>
        <li>FALE CONOSCO</li>
        <li>DÚVIDAS</li>
        <li>Prazos de Entrega</li>
        <li>Formas de Pagamento</li>
        <li>Política de privacidade</li>
        <li>Trocas e Devoluções</li>
      </ol>
    </nav>
  );
}
