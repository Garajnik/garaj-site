import { useRef, useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Icon from "../components/Icon/Icon";
import styles from "./Desktop.module.css";
import DraggableWindow from "../components/DraggableWindow/DraggableWindow";
import Contacts from "../windows/Contacts/Contacts";
import Works from "../windows/Works/Works";
import Clock from "../components/Clock/Clock";
import TaskBar from "../components/Taskbar/TaskBar";
import Console from "../windows/Console/Console";
import Resume from "../windows/ResumeViewer/Resume";

const WINDOW_OFFSET = 30;

const icons = [
  {
    name: "Работы",
    iconPath: "/src/assets/Icons/Folder.svg",
    windowId: "works",
  },
  {
    name: "резюме.pdf",
    iconPath: "/src/assets/Icons/Document.svg",
    windowId: "resume",
  },
  {
    name: "Консоль",
    iconPath: "/src/assets/Icons/Console.svg",
    windowId: "console",
  },
  {
    name: "Контакты",
    iconPath: "/src/assets/Icons/Mail.png",
    windowId: "contacts",
  },
];

export default function Desktop() {
  const [windows, setWindows] = useState({
    contacts: { open: false, x: null, y: null, zIndex: 0 },
    works: { open: false, x: null, y: null, zIndex: 0 },
    resume: { open: false, x: null, y: null, zIndex: 0 },
    console: { open: false, x: null, y: null, zIndex: 0 },
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const nextZIndex = useRef(1);
  const iconsContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openWindow = useCallback((windowId) => {
    setWindows((prev) => {
      const isAlreadyOpen = prev[windowId].open;
      const openWindows = Object.values(prev).filter((w) => w.open);

      let newX = 100;
      let newY = 100;

      if (openWindows.length > 0 && !isAlreadyOpen) {
        const lastWindow = openWindows[openWindows.length - 1];
        newX = (lastWindow.x || 100) + WINDOW_OFFSET;
        newY = (lastWindow.y || 100) + WINDOW_OFFSET;
      }

      return {
        ...prev,
        [windowId]: {
          ...prev[windowId],
          open: true,
          x: isAlreadyOpen ? prev[windowId].x : newX,
          y: isAlreadyOpen ? prev[windowId].y : newY,
          zIndex: nextZIndex.current++,
        },
      };
    });
  }, []);

  const activateWindow = useCallback((windowId) => {
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        zIndex: nextZIndex.current++,
      },
    }));
  }, []);

  const closeWindow = (windowId) => {
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        open: false,
      },
    }));
  };

  const updateWindowPosition = (windowId, x, y) => {
    setWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        x,
        y,
      },
    }));
  };

  const windowContent = {
    contacts: <Contacts />,
    works: <Works />,
    resume: <Resume />,
    console: (
      <Console
        exitFunc={() => {
          closeWindow("console");
        }}
      />
    ),
  };

  const windowInfo = icons.reduce((acc, icon) => {
    acc[icon.windowId] = {
      name: icon.name,
      iconPath: icon.iconPath,
      initWidth: windowSize(icon.windowId)[0],
      initHeight: windowSize(icon.windowId)[1],
    };
    return acc;
  }, {});

  function windowSize(windowId) {
    switch (windowId) {
      case "resume":
        return [500, 800];
        break;
      case "console":
        return [600, 400];
        break;
      case "contacts":
        return [400, 400];
        break;
      default:
        return [700, 500];
        break;
    }
  }

  const openWindows = Object.keys(windows).filter((key) => windows[key].open);

  return (
    <div className={styles.wallpaper}>
      <Clock />
      <div className={styles.iconsContainer} ref={iconsContainerRef}>
        {icons.map((icon, index) => {
          const x = useMotionValue(0);
          const y = useMotionValue(0);
          useEffect(() => {
            const rowLength = 4;
            const spacing = 100;
            const col = index % rowLength;
            const row = Math.floor(index / rowLength);
            const gridX = col * spacing;
            const gridY = row * spacing;
            const gridCenterX = ((rowLength - 1) * spacing) / 2;
            const numRows = Math.ceil(icons.length / rowLength);
            const gridCenterY = ((numRows - 1) * spacing) / 2;
            const offsetX = screenWidth / 2 - gridCenterX;
            const offsetY = screenHeight / 2 - gridCenterY;
            x.set(gridX + offsetX - 80);
            y.set(gridY + offsetY + 100);
          }, [screenWidth, screenHeight]);
          return (
            <motion.div
              key={icon.windowId}
              style={{ x, y, position: "absolute" }}
              drag
              dragConstraints={iconsContainerRef}
              dragElastic={0.2}
              dragMomentum={false}
            >
              <Icon
                name={icon.name}
                iconPath={icon.iconPath}
                func={() => openWindow(icon.windowId)}
              />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {Object.entries(windows).map(([key, windowState]) => {
          if (!windowState.open) return null;
          return (
            <DraggableWindow
              key={key}
              name={windowInfo[key].name}
              position={{
                x: windowState.x || 100,
                y: windowState.y || 100,
              }}
              zIndex={windowState.zIndex}
              onPositionChange={(pos) =>
                updateWindowPosition(key, pos.x, pos.y)
              }
              onActivate={() => activateWindow(key)}
              closeFunc={() => closeWindow(key)}
              initWidth={windowInfo[key].initWidth} // Передаем ширину
              initHeight={windowInfo[key].initHeight} // Передаем высоту
            >
              {windowContent[key]}
            </DraggableWindow>
          );
        })}
      </AnimatePresence>

      <TaskBar
        openWindows={openWindows}
        windowInfo={windowInfo}
        activateWindow={activateWindow}
        closeWindow={closeWindow} // Передаем closeWindow в TaskBar
      />
    </div>
  );
}
