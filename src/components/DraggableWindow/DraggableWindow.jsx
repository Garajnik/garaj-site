// DraggableWindow.jsx
import { useState } from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";
import styles from "./DraggableWindow.module.css";
import ControlButtons from "../ControlButton/ControlButtons";

export default function DraggableWindow({
  name,
  children,
  position,
  zIndex,
  onPositionChange,
  onActivate,
  closeFunc,
  initWidth = 500, // Fallback-значение
  initHeight = 300, // Fallback-значение
}) {
  const [size, setSize] = useState({
    width: initWidth,
    height: initHeight,
  });
  const [dragged, setDragged] = useState(false);

  // Анимации для Framer Motion
  const windowAnimations = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.2 },
  };

  return (
    <Rnd
      position={position}
      size={{ width: size.width, height: size.height }}
      onDragStop={(e, d) => {
        onPositionChange({ x: d.x, y: d.y });
        setDragged(false);
      }}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
        });
        onPositionChange(pos);
      }}
      minHeight={300}
      minWidth={500}
      bounds={"window"}
      enableResizing
      dragHandleClassName={styles.header}
      onDragStart={() => {
        setDragged(true);
        onActivate();
      }}
      style={{ zIndex }}
    >
      <motion.div
        {...windowAnimations}
        className={styles.content}
        onClick={onActivate}
      >
        <header
          style={{ cursor: dragged ? "grabbing" : "grab" }}
          className={styles.header}
        >
          {name}
          <ControlButtons closeFunc={() => closeFunc(false)} />
        </header>
        <div className={styles.windowBody}>{children}</div>
      </motion.div>
    </Rnd>
  );
}
