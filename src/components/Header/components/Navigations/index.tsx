import styles from "./styles.module.scss";
import { IconType } from "react-icons";

interface NavigationsProps {
  items: {
    name: string;
    icon?: IconType;
    isPink?: boolean;
  }[];
  className?: string;
}

export default function Navigations({ className, items }: NavigationsProps) {
  const classes = [styles.navigations];
  if (className) classes.push(className);
  return (
    <nav className={classes.join(" ")}>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <button type="button" className={item.isPink ? styles.pink : ""}>
              {item.icon && <item.icon className={styles.icon} />}
              {item.name}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
