import styles from "./Resume.module.css";
import resume from "../../assets/Resume.png";

export default function Resume() {
  return (
    <img draggable={false} src={resume} className={styles.container}></img>
  );
}
