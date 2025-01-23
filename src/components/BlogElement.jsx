import React from "react";
import styles from "./BlogElement.module.css";

export default function BlogElement(imageSource) {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.imageplaceholder}></div>
      <img
        className={styles.image}
        src="/src/assets/Blog_Images/Scaffolding_generator.png"
        alt={`${imageSource}`}
      />
      <div className={styles.text}></div>
    </div>
  );
}
