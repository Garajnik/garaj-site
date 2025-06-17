import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import styles from "./TaskBar.module.css";

const TaskBar = forwardRef(({ children, onLeftButtonClick }, ref) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  const updateDateTime = () => {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);

    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString().slice(-2);
    setCurrentDate(`${day}/${month}/${year}`);
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.taskbar}>
      {/* Кнопка слева с иконкой гамбургера */}
      <button
        className={styles.leftButton}
        onClick={onLeftButtonClick}
        aria-label="Меню"
      >
        <div className={styles.burgerIcon}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </div>
      </button>

      <div className={styles.tasksContainer}>{children}</div>

      <div className={styles.datetimeContainer}>
        <div className={styles.timeText}>{currentTime}</div>
        <div className={styles.dateText}>{currentDate}</div>
      </div>
    </div>
  );
});

export default TaskBar;
