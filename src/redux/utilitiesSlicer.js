import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalUtility: 0,
  totalCost: 0,
};

const utilitesSlice = createSlice({
  name: 'utilities',
  initialState,
  reducers: {
    setUtilite: (state, action) => {
      state.totalUtility = action.payload.totalUtility;
      state.totalCost = action.payload.totalCost;
    },
  },
});

export const { setUtilite } = utilitesSlice.actions;
export default utilitesSlice.reducer;