import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: '最初のタスク',
      completed: false,
    },
  ]);

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Task Manager</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))
        }
      </ul>
    </main>
  )
}

export default App
