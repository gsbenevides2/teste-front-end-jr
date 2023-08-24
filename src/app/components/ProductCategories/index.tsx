import styles from "./styles.module.scss";

interface ProductCategoriesProps {
  items: {
    name: string;
    selected?: boolean;
  }[];
  className?: string;
}

export default function ProductCategories({
  className,
  items,
}: ProductCategoriesProps) {
  const classes = [styles.productCategories];
  if (className) classes.push(className);
  return (
    <nav className={classes.join(" ")}>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <button
              type="button"
              className={item.selected ? styles.selected : ""}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
