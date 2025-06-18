import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import Task from "./Task";

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, icon) => {
    const newTask = {
      id: Date.now(),
      title,
      icon,
    };
    setTasks((prev) => [...prev, newTask]);
    return newTask.id;
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const TaskList = () => (
    <AnimatePresence>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          icon={task.icon}
          title={task.title}
          onClick={removeTask}
        />
      ))}
    </AnimatePresence>
  );

  return {
    tasks,
    addTask,
    removeTask,
    TaskList,
  };
};
