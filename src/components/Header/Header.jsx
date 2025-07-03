import { Link, useLocation } from "react-router";
import styles from "./Header.module.css"

export default function Header() {
  const location = useLocation()
  const path = location.pathname.replace(/^\//, '').replace(/^./, char => char.toUpperCase());
  return (
    <header className={styles.headerContainer}>
      <Link className={path === "Home" ? styles.active : styles.notActive} to={"/"}>Home</Link>
      <Link className={path === "Portfolio" ? styles.active : styles.notActive} to={"/portfolio"}>Portfolio</Link>
      <Link className={path === "Blog" ? styles.active : styles.notActive} to={"/blog"}>Blog</Link>
      <Link className={path === "Works" ? styles.active : styles.notActive} to={"/works"}>Works</Link>
      <Link className={path === "Contacts" ? styles.active : styles.notActive} to={"/contacts"}>Contacts</Link>
    </header>
  )
}

