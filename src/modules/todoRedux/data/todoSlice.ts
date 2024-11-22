/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo } from './todoTypes'
import { createTodo, deleteTodo, getAllTodos } from './todoThunk'

interface CourseState {
  status: string
  error: string | null
  todos: ITodo[]
}

const initialState: CourseState = {
  status: 'idle',
  error: null,
  todos: [],
}

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTodos.pending, (state) => {
      state.error = null
      state.status = 'loading'
    })
    builder.addCase(getAllTodos.fulfilled, (state, action: PayloadAction<any>) => {
      state.todos = action.payload
      state.status = 'succeeded'
    })
    builder.addCase(getAllTodos.rejected, (state, action: PayloadAction<any>) => {
      state.error = action?.payload
      state.status = 'failed'
    })

    builder.addCase(createTodo.pending, (state) => {
      state.error = null
    })
    builder.addCase(createTodo.fulfilled, (state, action: PayloadAction<any>) => {
      state.todos.push(action.payload)
    })
    builder.addCase(createTodo.rejected, (state, action: PayloadAction<any>) => {
      state.error = action?.payload
    })

    builder.addCase(deleteTodo.pending, (state) => {
      state.error = null
    })
    builder.addCase(deleteTodo.fulfilled, (state, action: any) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.meta.arg.id)
    })
    builder.addCase(deleteTodo.rejected, (state, action: PayloadAction<any>) => {
      state.error = action?.payload
    })
  },
})

export const {} = courseSlice.actions

export default courseSlice.reducer
