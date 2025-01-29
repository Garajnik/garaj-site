import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.gradient}></div>
      <nav>
        <Link className={styles.smalllinkleft} to="/portfolio">
          {t("portfolio")}
        </Link>
        <Link className={styles.biglink} to="/">
          <h1 className={styles.rainbowtext}>Гaraj</h1>
        </Link>
        <Link className={styles.smalllinkright} to="/resume">
          {t("resume")}
        </Link>
      </nav>
    </header>
  );
}
