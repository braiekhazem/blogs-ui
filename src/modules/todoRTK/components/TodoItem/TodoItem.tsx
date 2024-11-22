import { ITodo } from '../../services/TodoApi'

interface TodoItemProps {
  todo: ITodo
  updateTodo: (updatedTodo: ITodo) => void
  deleteTodo: (id: string) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, updateTodo, deleteTodo }) => {
  const toggleComplete = () => {
    updateTodo({ ...todo, completed: !todo.completed })
  }

  return (
    <div className={`todo-item-container ${todo.completed ? 'completed' : ''}`}>
      <span className={`text ${todo.completed ? 'completed' : ''}`}>{todo.title}</span>
      <div>
        <button className={'button'} onClick={toggleComplete}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className={'button'} onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
