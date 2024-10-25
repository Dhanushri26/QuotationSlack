import {configureStore} from "@reduxjs/toolkit";
import amenitiesReducer from  './redux/amenitiesSlicer';
import utilitiesReducer from './redux/utilitiesSlicer';

export const store = configureStore({
  reducer: {
    amenities: amenitiesReducer,
    utilities:utilitiesReducer,
  },
});

export default store;