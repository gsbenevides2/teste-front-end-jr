import CopyrightArea from "./components/CopyrightArea";
import FirstArea from "./components/FirstArea";
import NewsletterCard from "./components/NewsletterCard";
import styles from "./styles.module.scss";

export default function FooterComponent() {
  return (
    <footer className={styles.container}>
      <div className={styles.rowOne}>
        <FirstArea />
        <NewsletterCard />
      </div>
      <hr />
      <div className={styles.rowTwo}>
        <CopyrightArea />
      </div>
    </footer>
  );
}
