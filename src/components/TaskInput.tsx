type Props = {
  title: string;
  onChange: (value: string) => void;
  onAdd: () => void;
}

function TaskInput({ title, onChange, onAdd }: Props) {
  return(
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onAdd}>追加</button>
    </div>
  )
}

export default TaskInput;
