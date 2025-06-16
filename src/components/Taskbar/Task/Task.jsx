import styles from "./Task.module.css";

export default function Task({ iconSrc, children }) {
  return (
    <div className={styles.container}>
      <img src={iconSrc} alt={children} className={styles.image}/>
      <div className={styles.name}>{children}</div>
    </div>
  );
}
