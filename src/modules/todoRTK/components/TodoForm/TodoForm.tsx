import { ChangeEvent, FormEvent, useState } from 'react'

interface TodoFormProps {
  addTodo: (text: string) => void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={text}
        onChange={handleChange}
        placeholder="Add a new todo..."
      />
      <button type="submit" className="button">
        Add
      </button>
    </form>
  )
}

export default TodoForm
