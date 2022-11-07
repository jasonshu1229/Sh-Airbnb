import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';
import entireSlice from './modules/entire';
import detailSlice from './modules/detail';
import mainReducer from './modules/main';

const store = configureStore({
  reducer: {
    main: mainReducer,
    home: homeReducer,
    entire: entireSlice,
    detail: detailSlice,
  }
})

export default store;