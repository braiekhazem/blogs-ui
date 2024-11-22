/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../shared/utils/axios'
import { ITodoCreate, ITodoDelete, ITodoUpdate } from './todoTypes'

export const getAllTodos = createAsyncThunk('getAllTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/api/todos`)

    if (response.status === 200) {
      return response.data
    }

    throw new Error(response.statusText)
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const createTodo = createAsyncThunk(
  'createTodo',
  async (data: ITodoCreate, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/api/todos`, data)

      if (response.status === 201) {
        return response.data
      }

      throw new Error(response.statusText)
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const updateTodo = createAsyncThunk(
  'updateTodo',
  async (data: ITodoUpdate, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`/api/todos/${data.id}`, data.body)

      if (response.status === 200) {
        return response.data
      }

      throw new Error(response.statusText)
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const deleteTodo = createAsyncThunk(
  'deleteTodo',
  async (data: ITodoDelete, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/api/todos/${data.id}`)

      if (response.status === 204) {
        return response.data
      }

      throw new Error(response.statusText)
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
