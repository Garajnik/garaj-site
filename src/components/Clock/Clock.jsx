import { useState, useEffect } from "react";
import styles from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Форматирование времени: HH:MM:SS
  const formattedTime = time.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Форматирование даты: DD/MM/YY
  const formattedDate = time
    .toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    })
    .replace(/\./g, "/");

  // День недели сокращённо
  const daysShort = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const dayOfWeek = daysShort[time.getDay()];

  return (
    <div className={styles.clockContainer}>
      <div className={styles.time}>{formattedTime}</div>
      <div className={styles.date}>
        {formattedDate} {dayOfWeek}
      </div>
    </div>
  );
}
