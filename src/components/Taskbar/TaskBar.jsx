import { AnimatePresence } from "motion/react";
import Task from "./Task/Task";
import styles from "./TaskBar.module.css";

export default function TaskBar({
  openWindows,
  windowInfo,
  activateWindow,
  closeWindow,
}) {
  return (
    <div className={styles.taskBar}>
      <div className={styles.taskContainer}>
        <AnimatePresence>
          {openWindows.map((windowId) => (
            <Task
              key={windowId}
              windowId={windowId}
              name={windowInfo[windowId].name}
              iconPath={windowInfo[windowId].iconPath}
              activateWindow={activateWindow}
              closeWindow={closeWindow} // Передаем closeWindow в Task
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
