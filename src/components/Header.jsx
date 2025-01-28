import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.gradient}></div>
      <nav>
        <Link className={styles.smalllinkleft} to="/blog">
          Blog
        </Link>
        <Link className={styles.biglink} to="/">
          <h1>Гaraj</h1>
        </Link>
        <Link className={styles.smalllinkright} to="/resume">
          Resume
        </Link>
      </nav>
    </header>
  );
}
