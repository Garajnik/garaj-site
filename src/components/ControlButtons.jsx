import styles from "./ControlButtons.module.css";
export default function ControlButtons() {
  return (
    <div className={styles.container}>
      <div className={styles.hide}></div>
      <div className={styles.maximize}></div>
      <div className={styles.close}></div>
    </div>
  );
}
