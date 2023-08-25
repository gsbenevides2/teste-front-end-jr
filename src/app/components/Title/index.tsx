import styles from "./styles.module.scss";
interface TitleProps {
  text: string;
  subtitle?: string;
  className?: string;
  hideHr?: boolean;
}
export default function Title({
  text,
  className,
  subtitle,
  hideHr,
}: TitleProps) {
  return (
    <div className={className}>
      <div className={styles.title}>
        {!hideHr && <hr />}
        <h1>{text}</h1>
        {!hideHr && <hr />}
      </div>
      {subtitle && (
        <div className={styles.subtitle}>
          <h2>{subtitle}</h2>
        </div>
      )}
    </div>
  );
}
