import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <div className={styles.container}>
      <h1>Как со мной связаться?</h1>
      <li>
        <ul>Email</ul>
        <ul>Telegram</ul>
      </li>
      <h2>Другие ссылки на меня:</h2>
      <li>
        <ul>Github</ul>
        <ul>YouTube</ul>
        <ul>Twitch</ul>
      </li>
    </div>
  );
}
