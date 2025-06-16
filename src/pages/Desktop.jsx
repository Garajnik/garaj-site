import { useState } from "react";
import Icon from "../components/Icon/Icon";
import styles from "./Desktop.module.css";
import DraggableWindow from "../components/DraggableWindow/DraggableWindow";
import FileManager from "../windows/FileManager";
import TaskBar from "../components/Taskbar/TaskBar";
import Contacts from "../windows/Contacts/Contacts";

export default function Desktop() {
  const [computerState, setComputerState] = useState(true);
  const [contactsState, setContactsState] = useState(false);

  return (
    <div className={styles.wallpaper}>
      <div className={styles.iconsContainer}>
        <Icon
          name="Мой ПК"
          iconPath="/src/assets/Icons/Computer.svg"
          func={() => {
            setComputerState(true);
          }}
        />
        <Icon
          name="Работа"
          iconPath="/src/assets/Icons/Folder.svg"
          func={() => {
            setPortfolioState(true);
          }}
        />
        <Icon
          name="резюме.pdf"
          iconPath="/src/assets/Icons/Document.svg"
          func={() => {
            setAboutState(true);
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
      {computerState && (
        <DraggableWindow
          name={"Этот компьютер"}
          closeFunc={() => setComputerState(false)}
        >
          <FileManager></FileManager>
        </DraggableWindow>
      )}
      {contactsState && (
        <DraggableWindow
          name={"Контакты"}
          closeFunc={() => setContactsState(false)}
        >
          <Contacts></Contacts>
        </DraggableWindow>
      )}
      <TaskBar></TaskBar>
    </div>
  );
}
