import { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })
  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const [title, setTitle] = useState('');
  const handleAddTask = () => {
    if(title === '') return;
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);
    setTitle('');
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddTask}>追加</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type='checkbox'
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
              style={{ cursor: 'pointer' }}
            />
            <span
              onClick={() => toggleCompleted(task.id)}
              style={{
                cursor: 'pointer',
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#888' : '#000'
              }}
            >
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
