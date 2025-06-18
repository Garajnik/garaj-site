import styles from "./ControlButtons.module.css";
export default function ControlButtons({ hideFunc, maxFunc, closeFunc }) {
  return (
    <div className={styles.container}>
      {/* <img src="/src/assets/Icons/Hide.svg" className={styles.hide}></img>
      <img
        src="/src/assets/Icons/Maximize.svg"
        className={styles.maximize}
      ></img> */}
      <img
        src="/src/assets/Icons/Close.svg"
        className={styles.close}
        onClick={() => closeFunc(false)}
      ></img>
    </div>
  );
}
