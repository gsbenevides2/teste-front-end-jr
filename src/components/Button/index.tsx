import styles from "./styles.module.scss";
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}
export default function ButtonComponent({ children, className }: ButtonProps) {
  const classes = [styles.button];
  if (className) classes.push(className);
  return <button className={classes.join(" ")}>{children}</button>;
}
