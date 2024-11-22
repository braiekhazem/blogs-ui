import TodoForm from '../../components/TodoForm'
import TodoItem from '../../components/TodoItem'
import {
  ITodo,
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from '../../services/TodoApi'

const Todo = () => {
  const { data: todos } = useGetTodosQuery({})
  const [createTodo] = useCreateTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()

  const addTodo = (text: string) => createTodo({ title: text })

  const updateTodoHandler = (updatedTodo: ITodo) => updateTodo(updatedTodo)

  const deleteTodoHandler = (id: string) => deleteTodo(id)

  return (
    <div className="todo-list-container">
      <TodoForm addTodo={addTodo} />
      {todos?.map((todo: ITodo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodoHandler}
          deleteTodo={deleteTodoHandler}
        />
      ))}
    </div>
  )
}

export default Todo
