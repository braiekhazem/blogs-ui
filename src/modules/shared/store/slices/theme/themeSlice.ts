import { createSlice } from '@reduxjs/toolkit'

interface ThemeState {
  mode: string
}

const initialState: ThemeState = {
  mode: 'light',
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
  },
})

export default themeSlice.reducer

export const { toggleTheme } = themeSlice.actions
