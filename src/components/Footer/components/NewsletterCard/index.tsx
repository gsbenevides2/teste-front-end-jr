import Input from "@/components/Input/input";
import styles from "./styles.module.scss";
import ButtonComponent from "@/components/Button";

export default function NewsletterCard() {
  return (
    <div className={styles.container}>
      <h5>
        Cadastre-se e Receba nossas <b>novidades e promoções</b>
      </h5>
      <p className={styles.description}>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>
      <div className={styles.row}>
        <Input placeholder="Seu e-mail" />
        <ButtonComponent className={styles.button}>OK</ButtonComponent>
      </div>
    </div>
  );
}
