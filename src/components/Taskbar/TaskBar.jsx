import Task from "./Task/Task";
import styles from "./TaskBar.module.css";

export default function TaskBar() {
  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <img src="/src/assets/logo.png" alt="" />
      </div>
      <Task iconSrc="/src/assets/logo.png">Name1</Task>
      <Task></Task>
      <Task></Task>
    </div>
  );
}
