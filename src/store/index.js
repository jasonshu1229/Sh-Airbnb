import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';
import entireSlice from './modules/entire';

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireSlice
  }
})

export default store;