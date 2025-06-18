// Contacts.jsx
import { useState } from "react";
import styles from "./Contacts.module.css";

export default function Contacts() {
  const [copied, setCopied] = useState(false);
  const email = "garajnik.true@yandex.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // убираем уведомление через 2 секунды
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Не удалось скопировать", err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Как со мной связаться?</h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          Email:
          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopyEmail}
          >
            {email}
          </button>
          {copied && <span className={styles.copiedNotice}>Скопировано!</span>}
        </li>
        <li className={styles.listItem}>
          Telegram:
          <a
            className={styles.link}
            href="https://t.me/salfurbrown"
            target="_blank"
            rel="noopener noreferrer"
          >
            @salfurbrown
          </a>
        </li>
      </ul>

      <h2>Другие ссылки:</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            className={styles.link}
            href="https://github.com/garajnik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            className={styles.link}
            href="https://youtube.com/garajdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
        <li className={styles.listItem}>
          <a
            className={styles.link}
            href="https://twitch.tv/garajnik_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>
        </li>
      </ul>
    </div>
  );
}
