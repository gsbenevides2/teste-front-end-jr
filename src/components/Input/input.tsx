import styles from "./styles.module.scss";
interface InputProps {
  placeholder?: string;
}

export default function Input(props: InputProps) {
  return <input className={styles.input} placeholder={props.placeholder} />;
}
