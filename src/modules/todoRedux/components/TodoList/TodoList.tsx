import { useAppDispatch, useAppSelector } from '@src/modules/shared/store'
import { deleteTodo } from '../../data/todoThunk'

const TodoList = () => {
  const dispatch = useAppDispatch()
  const { todos } = useAppSelector((state) => state.todo)

  const handleDelete = (id: number) => {
    dispatch(deleteTodo({ id }))
  }

  return (
    <div className="todo_list">
      {todos.map((todo) => (
        <div className="todo_list_container" key={todo.id}>
          <p>{todo.title}</p>
          <button
            className="todo_list_container_btn"
            onClick={() => handleDelete(todo.id as number)}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
