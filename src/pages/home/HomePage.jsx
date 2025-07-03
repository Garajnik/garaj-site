import { Link } from "react-router"
import styles from "./HomePage.module.css"
export default function () {
  return (
    <div className={styles.container}>
      <h1>Hello, my name is Leonid. And this is my website.</h1>
      <p>Feel free to navigate:</p>
      <main>
        <ul>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </main>
    </div>
  )
}

