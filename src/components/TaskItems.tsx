import type { Task } from "../types/task";
/**
 * タスク一覧を表示するコンポーネント
 * @param {Object} props
 * @param {Task[]} props.tasks タスク一覧
 * @param {(id: number) => void} props.onToggle 完了状態切り替え
 * @param {(id: number) => void} props.onDelete タスク削除
 * @return {JSX.Element}
 */
type Props = {
  tasks: Task[];
  onToggle: (value: number) => void;
  onDelete: (value: number) => void;
}
function TaskItems({ tasks, onToggle, onDelete }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ display: "flex", gap: "1rem" }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span
            onClick={() => onToggle(task.id)}
            style={{
              cursor: "pointer",
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "#888" : "#000",
            }}
          >
            {task.title}
          </span>
          <button onClick={() => onDelete(task.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskItems;
