import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AnimationState {
  animationState: number
}

const initialState: AnimationState = {
    animationState: 0,
}

export const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<number>) => {
      state.animationState = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { change } = animationSlice.actions

export const animationReducer = animationSlice.reducer;