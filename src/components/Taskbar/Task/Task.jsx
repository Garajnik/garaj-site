import React from "react";
import { motion } from "framer-motion";
import styles from "./Task.module.css";

const Task = ({ id, icon, title, onClick }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClick(id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
      className={styles.task}
    >
      <div className={styles.content}>
        <img src={icon} alt={title} className={styles.icon} />
        <span className={styles.title}>{title}</span>
      </div>
      <button
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Close task"
      >
        ×
      </button>
    </motion.div>
  );
};

export default Task;
