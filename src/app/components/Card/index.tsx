import ButtonComponent from "@/components/Button";
import styles from "./styles.module.scss";

interface CardProps {
  type: "partners" | "products";
}

export default function CardComponent(props: CardProps) {
  const classes = [styles.container, styles[props.type]].join(" ");
  return (
    <div className={classes}>
      <h4>{props.type === "partners" ? "Parceiros" : "Produtos"}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <ButtonComponent className={styles.button}>Confira</ButtonComponent>
    </div>
  );
}
