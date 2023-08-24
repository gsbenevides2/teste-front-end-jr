import FirstArea from "./components/FirstArea";
import styles from "./styles.module.scss";

export default function FooterComponent() {
  return (
    <footer className={styles.container}>
      <div className={styles.rowOne}>
        <FirstArea />
      </div>
    </footer>
  );
}
