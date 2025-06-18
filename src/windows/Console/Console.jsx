// Console.jsx
import React, { useState, useRef, useEffect } from "react";
import styles from "./Console.module.css";

const FILE_SYSTEM = {
  "/": ["home", "etc", "var", "usr"],
  "/home": ["user", "guest"],
  "/home/user": ["documents", "downloads"],
};

function generateCowsay(text) {
  const border = " " + "-".repeat(text.length + 2);
  return [
    `/${" ".repeat(text.length + 2)}\\`,
    `< ${text} >`,
    `\\${" ".repeat(text.length + 2)}/`,
    border,
    `        \\   ^__^`,
    `         \\  (oo)\\_______`,
    `            (__)\\       )\\/\\`,
    `                ||----w |`,
    `                ||       ||`,
  ].join("\n");
}

export default function Console({ exitFunc }) {
  const [history, setHistory] = useState([
    { id: 0, text: "Welcome to the terminal!", isCommand: false },
  ]);
  const [cwd, setCwd] = useState("/");
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  const availableCommands = ["pwd", "ls", "cowsay", "help", "exit"];

  const handleCommand = (cmdLine) => {
    const [cmd, ...args] = cmdLine.trim().split(/\s+/);
    switch (cmd) {
      case "pwd":
        return cwd;

      case "ls": {
        const target = args[0]
          ? args[0].startsWith("/")
            ? args[0]
            : `${cwd}/${args[0]}`
          : cwd;
        const list = FILE_SYSTEM[target] || [];
        return list.join("  ");
      }

      case "cowsay": {
        const msg = args.join(" ") || "Moo!";
        return generateCowsay(msg);
      }

      case "help":
        return `Available commands:\n  ${availableCommands.join("\n  ")}`;

      case "exit":
        // вызываем функцию из пропсов и ничего не выводим
        exitFunc();
        return "";

      case "":
        return "";

      default:
        return `bash: ${cmd}: command not found`;
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const cmdLine = input;
    // добавляем команду в историю
    setHistory((h) => [
      ...h,
      { id: h.length, text: `> ${cmdLine}`, isCommand: true },
    ]);
    // обрабатываем
    const result = handleCommand(cmdLine);
    if (result) {
      setHistory((h) => [
        ...h,
        { id: h.length + 1, text: result, isCommand: false },
      ]);
    }
    setInput("");
  };

  return (
    <div className={styles.console} onClick={() => inputRef.current?.focus()}>
      <div className={styles.history}>
        {history.map((entry) => (
          <pre
            key={entry.id}
            className={entry.isCommand ? styles.command : styles.output}
          >
            {entry.text}
          </pre>
        ))}
      </div>
      <form onSubmit={onSubmit} className={styles.prompt}>
        <span className={styles.promptLabel}>{`user@you:${cwd}$`}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
