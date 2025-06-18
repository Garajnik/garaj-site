import styles from "./ControlButtons.module.css";
import CloseIcon from "../../assets/Icons/Close.svg";
export default function ControlButtons({ hideFunc, maxFunc, closeFunc }) {
  return (
    <div className={styles.container}>
      <img
        src={CloseIcon}
        className={styles.close}
        onClick={() => closeFunc(false)}
      ></img>
    </div>
  );
}
