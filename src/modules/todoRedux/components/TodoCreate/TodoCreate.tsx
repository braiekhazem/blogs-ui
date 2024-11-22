import { useAppDispatch } from '@src/modules/shared/store'
import { useState } from 'react'
import { createTodo } from '../../data/todoThunk'

const TodoCreate = () => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(createTodo({ title }))
      .unwrap()
      .then(() => {
        setTitle('')
      })
  }

  return (
    <form className="todo_create" onSubmit={handleCreate}>
      <input
        placeholder="Add a new task"
        className="todo_create_input"
        value={title}
        onChange={handleChange}
      />

      <button type="submit" className="todo_create_btn">
        Add
      </button>
    </form>
  )
}

export default TodoCreate
