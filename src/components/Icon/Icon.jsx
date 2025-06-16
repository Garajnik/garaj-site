import { useState } from "react";
import styles from "./Icon.module.css";

export default function Icon({ iconPath, name, func }) {
  const [backgroundColor, setbackgroundColor] = useState("none");

  function SelectIcon() {
    if (backgroundColor === "violet") {
      console.log(backgroundColor);
      func();
    } else {
      setbackgroundColor("violet");
    }
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundColor }}
      onClick={() => {
        SelectIcon();
      }}
    >
      <img className={styles.imageContainer} src={iconPath} alt={name} />
      <div className={styles.textContainer}>{name}</div>
    </div>
  );
}
