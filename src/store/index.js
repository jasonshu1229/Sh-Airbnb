import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';
import entireSlice from './modules/entire';
import detailSlice from './modules/detail';

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireSlice,
    detail: detailSlice
  }
})

export default store;