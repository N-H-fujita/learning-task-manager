import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItems from "./components/TaskItems";
import type { Task } from "./types/task";

/**
 * タスク1件の型定義
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * Task Manager App
 * - localStorage にタスクを保存
 * - タスクの追加 / 完了切り替え / 削除が可能
 */
function App() {
  /**
   * タスク一覧
   * @type {Task[]}
   */
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  /** 入力中のタスクタイトル
   * @type {string}
  */
  const [title, setTitle] = useState<string>("");

  /** tasks が変わるたびに localStorage へ保存 */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /**
   * タスクを追加する
   * 空白のみの場合は追加しない
   * @return {void}
   */
  const handleAddTask = () => {
    const trimmedTitle = title.trim();

    if (trimmedTitle === "") {
      setTitle("");
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: trimmedTitle,
        completed: false,
      },
    ]);

    setTitle("");
  };

  /**
   * タスクの完了状態を切り替える
   * @param {number} id タスクID
   * @return {void}
   */
  const toggleCompleted = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  };

  /**
   * タスクを削除する
   * @param {number} id タスクID
   * @return {void}
   */
  const deleteTask = (id: number): void => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id),
    );
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Task Manager</h1>

      <TaskInput
        title={title}
        onChange={setTitle}
        onAdd={handleAddTask}
      />

      <TaskItems
        tasks={tasks}
        onToggle={toggleCompleted}
        onDelete={deleteTask}
      />
    </main>
  );
}

export default App;

