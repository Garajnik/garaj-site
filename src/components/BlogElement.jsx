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
      <div className={styles.text}>
        <h1>Scaffolding tool for Unity</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          adipisci omnis deleniti dignissimos voluptatibus impedit ullam
          expedita ut, vero molestias nemo repudiandae, totam quae vel sit harum
          voluptatum voluptate accusamus?
        </p>
      </div>
    </div>
  );
}
