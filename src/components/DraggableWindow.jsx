import { useState } from "react";
import { Rnd } from "react-rnd";
import styles from "./DraggableWindow.module.css";
import ControlButtons from "./ControlButtons";

export default function DraggableWindow({ name, children }) {
  const [position, setPosition] = useState({ x: 400, y: 200 });
  const [size, setSize] = useState({ width: 700, height: 500 });

  return (
    <Rnd
      position={{ x: position.x, y: position.y }}
      size={{ width: size.width, height: size.height }}
      onDragStop={(e, d) => {
        setPosition({ x: d.x, y: d.y });
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
    >
      <div className={styles.content}>
        <header className={styles.header}>
          {name}
          <ControlButtons />
        </header>
        {children}
      </div>
    </Rnd>
  );
}
