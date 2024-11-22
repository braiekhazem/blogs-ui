/* eslint-disable @typescript-eslint/no-explicit-any */
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import themeReducer from '../../slices/theme/themeSlice'

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['mode'],
}

export const themePersistedReducer = persistReducer(themePersistConfig, themeReducer)
