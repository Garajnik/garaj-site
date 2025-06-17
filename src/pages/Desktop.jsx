import { useRef, useState } from "react";
import Icon from "../components/Icon/Icon";
import styles from "./Desktop.module.css";
import DraggableWindow from "../components/DraggableWindow/DraggableWindow";
import TaskBar from "../components/Taskbar/TaskBar";
import Contacts from "../windows/Contacts/Contacts";
import { useTaskManager } from "../components/Taskbar/Task/useTaskManager";
import Works from "../windows/Works/Works";

export default function Desktop() {
  const [contactsState, setContactsState] = useState(false);
  const [workfolderState, setWorkfolderState] = useState(true);
  const [resumeState, setResumeState] = useState(false);
  const [consoleState, setConsoleState] = useState(false);

  const { tasks, addTask, removeTask, TaskList } = useTaskManager();

  const taskBarRef = useRef();

  return (
    <div className={styles.wallpaper}>
      <div className={styles.iconsContainer}>
        <Icon
          name="Работы"
          iconPath="/src/assets/Icons/Folder.svg"
          func={() => {
            setWorkfolderState(true);
          }}
        />
        <Icon
          name="резюме.pdf"
          iconPath="/src/assets/Icons/Document.svg"
          func={() => {
            setResumeState(true);
          }}
        />
        <Icon
          name="Консоль"
          iconPath="/src/assets/Icons/Console.svg"
          func={() => {
            setConsoleState(true);
          }}
        />
        <Icon
          name="Контакты"
          iconPath="/src/assets/Icons/Mail.png"
          func={() => {
            setContactsState(true);
          }}
        />
      </div>
      {contactsState && (
        <DraggableWindow
          name={"Контакты"}
          closeFunc={() => setContactsState(false)}
        >
          <Contacts></Contacts>
        </DraggableWindow>
      )}
      {workfolderState && (
        <DraggableWindow
          name={"Работы"}
          closeFunc={() => setWorkfolderState(false)}
        >
          <Works />
        </DraggableWindow>
      )}
      {resumeState && (
        <DraggableWindow
          name={"Резюме"}
          closeFunc={() => setResumeState(false)}
        >
          <Contacts></Contacts>
        </DraggableWindow>
      )}
      {consoleState && (
        <DraggableWindow
          name={"Консоль"}
          closeFunc={() => setConsoleState(false)}
        >
          <Contacts></Contacts>
        </DraggableWindow>
      )}
      <TaskBar ref={taskBarRef}>
        <TaskList />
      </TaskBar>
    </div>
  );
}
