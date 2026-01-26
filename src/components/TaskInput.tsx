/**
 * タスク入力コンポーネント
 * @param {Object} props
 * @param {string} props.title 入力中のタスクタイトル
 * @param {(value: string) => void} props.onChange タイトル変更時の処理
 * @param {() => void} props.onAdd タスク追加処理
 * @return {JSX.Element}
 */

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
