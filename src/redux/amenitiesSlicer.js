import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalAmenities: 0,
  totalPrice: 0,
};

const amenitiesSlice = createSlice({
  name: 'amenities',
  initialState,
  reducers: {
    setAmenitie: (state, action) => {
      state.totalAmenities = action.payload.totalAmenities;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { setAmenitie } = amenitiesSlice.actions;
export default amenitiesSlice.reducer;