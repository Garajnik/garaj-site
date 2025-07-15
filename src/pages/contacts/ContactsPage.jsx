import Header from "../../components/Header/Header";
import styles from "./ContactsPage.module.css"

export default function ContactsPage() {
  return (
    <div>
      <Header />
      <div className={styles.contactsContainer}>
        <h1>Contact me with:</h1>
        <ul>
          <li>Email: <a href="email:lexan1699@gmail.com">lexan1699@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}

