import { useState } from "react";
import { Rnd } from "react-rnd";
import styles from "./DraggableWindow.module.css";
import ControlButtons from "../ControlButton/ControlButtons";

export default function DraggableWindow({ name, children, closeFunc }) {
  const [position, setPosition] = useState({ x: 400, y: 200 });
  const [size, setSize] = useState({ width: 700, height: 500 });
  const [dragged, setDragged] = useState(false);

  return (
    <Rnd
      position={{ x: position.x, y: position.y }}
      size={{ width: size.width, height: size.height }}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y });
        setDragged(false);
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.style.width,
          height: ref.style.height,
        });
        setPosition(position);
      }}
      minHeight={300}
      minWidth={500}
      bounds={"window"}
      enableResizing
      dragHandleClassName={styles.header}
      onDragStart={() => {
        setDragged(true);
      }}
    >
      <div className={styles.content}>
        <header
          style={{ cursor: dragged ? "grabbing" : "grab" }}
          className={styles.header}
        >
          {name}
          <ControlButtons closeFunc={() => closeFunc(false)} />
        </header>
        {children}
      </div>
    </Rnd>
  );
}
