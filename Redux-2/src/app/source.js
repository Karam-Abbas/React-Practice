import { configureStore } from '@reduxjs/toolkit'
import nameReducer from '../features/name/nameSlice.js'

export const store = configureStore({
  reducer: {
    name : nameReducer,
  },
})