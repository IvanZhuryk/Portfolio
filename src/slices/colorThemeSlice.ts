import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ColorThemeState {
    colorThemeState: string
    visible:boolean
}

const initialState: ColorThemeState = {
    colorThemeState: '#c70039',
    visible:true
}

export const colorThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.colorThemeState = action.payload
    },
    changeVisible:(state) => {
      state.visible  = !state.visible
    }
  },
})

// Action creators are generated for each case reducer function
export const { change, changeVisible } = colorThemeSlice.actions

export const colorThemeReducer = colorThemeSlice.reducer;