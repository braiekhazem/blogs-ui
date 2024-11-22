import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../../auth/data/authSlice'
import { api } from '../services/api'
import modalsReducer from './slices/modals/modalsSlice'
import { themePersistedReducer } from './persist/theme/themePersist'
import todoReducer from '@src/modules/todoRedux/data/todoSlice'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  theme: themePersistedReducer,
  auth: authReducer,
  modals: modalsReducer,
  todo: todoReducer,
})

export default rootReducer
