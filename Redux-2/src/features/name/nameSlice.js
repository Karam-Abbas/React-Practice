import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: "",
}

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    Lower: (state) => {
      state.name = state.name.toLowerCase();
    },
    Upper: (state) => {
      state.name = state.name.toUpperCase();
    },
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { Lower, Upper, updateName } = nameSlice.actions

export default nameSlice.reducer