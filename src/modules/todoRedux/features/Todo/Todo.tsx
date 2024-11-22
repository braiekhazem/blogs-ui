import { useAppDispatch, useAppSelector } from '@src/modules/shared/store'
import { useEffect } from 'react'
import { getAllTodos } from '../../data/todoThunk'
import TodoList from '../../components/TodoList'
import TodoCreate from '../../components/TodoCreate'

const Todo = () => {
  const dispatch = useAppDispatch()

  const { status } = useAppSelector((state) => state.todo)

  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="feature_todo">
      <div className="feature_todo_container">
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  )
}

export default Todo
