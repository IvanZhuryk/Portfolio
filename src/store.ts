import { configureStore } from '@reduxjs/toolkit'
import { animationReducer } from './slices/animationSlice'
import { colorThemeReducer } from './slices/colorThemeSlice'

export const store = configureStore({
  reducer: {
    animation: animationReducer,
    theme:colorThemeReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch