import { PiMagnifyingGlass } from "react-icons/pi";
import styles from "./styles.module.scss";
interface SearchBarProps {
  className?: string;
}
export default function SearchBar(props: SearchBarProps) {
  const allStyles = [styles.searchBar];
  if (props.className) allStyles.push(props.className);
  const stylesStr = allStyles.join(" ");
  return (
    <div className={stylesStr}>
      <input type="text" placeholder="O que você está buscando?" />
      <button type="button">
        <PiMagnifyingGlass className={styles.icon} />
      </button>
    </div>
  );
}
