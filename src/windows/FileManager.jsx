import styles from "./FileManager.module.css";

export default function FileManager() {
  return (
    <div className={styles.container}>
      <header>
        <img src="/src/assets/Icons/Plus.svg" />
        <img src="/src/assets/Icons/NewFolder.svg" />
      </header>
      <nav></nav>
    </div>
  );
}
