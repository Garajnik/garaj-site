import { useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Импорт motion
import styles from "./Icon.module.css";

export default function Icon({ iconPath, name, func }) {
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      SelectIcon();
    }, 300);
  };

  const handleDoubleClick = () => {
    clearTimeout(timerRef.current);
    func();
  };

  return (
    <motion.div
      className={styles.container}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      // Анимация при нажатии
      whileTap={{
        scale: 0.85, // Уменьшение размера до 85%
        transition: { duration: 0.15 },
      }}
      // Опциональная базовая анимация
      initial={{ scale: 1 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <img className={styles.imageContainer} src={iconPath} alt={name} />
      <div className={styles.textContainer}>{name}</div>
    </motion.div>
  );
}
