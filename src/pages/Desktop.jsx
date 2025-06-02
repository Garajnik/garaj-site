import { Rnd } from "react-rnd";
import DraggableWindow from "../components/DraggableWindow";
import styles from "./Desktop.module.css";

export default function Desktop() {
  return (
    <div className={styles.wallpaper}>
      <DraggableWindow name={"Slack"}>kek</DraggableWindow>
    </div>
  );
}
