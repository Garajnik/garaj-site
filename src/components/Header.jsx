import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  const redirectToBlog = () => {
    window.location.href = "/";
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 onClick={redirectToBlog}>Гaraj</h1>
        <a href="/blog">Blog</a>
        <a href="/resume">Resume</a>
        <a href="/contacts">Contacts</a>
      </div>
    </header>
  );
}
