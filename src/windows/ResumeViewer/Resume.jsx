import styles from "./Resume.module.css";

export default function Resume() {
  return (
    <img
      draggable={false}
      src="/src/assets/Resume.png"
      className={styles.container}
    ></img>
  );
}
