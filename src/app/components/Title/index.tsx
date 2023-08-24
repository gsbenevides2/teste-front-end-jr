import styles from "./styles.module.scss";
interface TitleProps {
  text: string;
  className?: string;
}
export default function Title({ text, className }: TitleProps) {
  const classes = [styles.title];
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")}>
      <hr />
      <h1>{text}</h1>
      <hr />
    </div>
  );
}
