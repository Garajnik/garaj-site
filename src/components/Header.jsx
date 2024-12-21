import React from "react";
import styles from "./Header.module.css";
import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.biglink} to="/">
          <h1>Гaraj</h1>
        </Link>
        <Link className={styles.smalllink} to="/blog">
          Blog
        </Link>
        <Link className={styles.smalllink} to="/resume">
          Resume
        </Link>
        <Link className={styles.smalllink} to="/contacts">
          Links
        </Link>
      </nav>
    </header>
  );
}
