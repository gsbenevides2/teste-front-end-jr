import FirstAreaAbout from "./AboutNavigation";
import FirstAreaInformation from "./InformationNavigation";
import FirstAreaPayment from "./PaymentWays";
import styles from "./styles.module.scss";

export default function FirstArea() {
  return (
    <div className={styles.container}>
      <FirstAreaAbout />
      <FirstAreaInformation />
      <FirstAreaPayment />
    </div>
  );
}
