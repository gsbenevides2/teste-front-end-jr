import Image from "next/image";
import styles from "./styles.module.scss";

interface CategoriesProps {
  items: {
    name: string;
    icon: string;
    selected?: boolean;
  }[];
  className?: string;
}

export default function Categories({ className, items }: CategoriesProps) {
  const classes = [styles.categories];
  if (className) classes.push(className);
  return (
    <nav className={classes.join(" ")}>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <button type="button">
              <div
                className={
                  item.selected
                    ? [styles.icon, styles.selected].join(" ")
                    : styles.icon
                }
              >
                <Image src={item.icon} alt={item.name} width={61} height={61} />
              </div>
              <span className={item.selected ? styles.selected : ""}>
                {item.name}
              </span>
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
