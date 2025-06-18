import { motion } from "motion/react";
import styles from "./Task.module.css";

export default function Task({
  windowId,
  name,
  iconPath,
  activateWindow,
  closeWindow,
}) {
  return (
    <motion.div
      className={styles.task}
      onClick={() => activateWindow(windowId)} // Активация окна по ЛКМ
      onContextMenu={(e) => {
        e.preventDefault(); // Предотвращаем стандартное меню
        closeWindow(windowId); // Закрываем окно по ПКМ
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, transition: { type: "spring", stiffness: 300 } }}
    >
      <img src={iconPath} alt={name} />
      <span>{name}</span>
    </motion.div>
  );
}
