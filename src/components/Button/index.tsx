import styles from "./styles.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function ButtonComponent({
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = [styles.button];
  if (className) classes.push(className);
  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}
