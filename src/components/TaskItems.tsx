import type { Task } from "../types/task";

type Props = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
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
