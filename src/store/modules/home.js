import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getHomeGoodPriceData, getHomeScoreData} from "@/services";

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload,{ dispatch }) => {
  // 这样写会把请求数据同步进行，有顺序延迟，而在这里一起请求就好，不要求哪一个数据回来的先后顺序
  // 方法一：有弊端
  // const res = await getHomeGoodPriceData();
  // const res2 = await getHomeScoreData();
  // return { goodPrice: res, highScore: res2 }
  
  getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  });
  
  getHomeScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res));
  })
  
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      // state.goodPriceInfo = payload.goodPrice;
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload.goodPrice;
  //     state.highScoreInfo = payload.highScore;
  //   }
  // }
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } = homeSlice.actions;

export default homeSlice.reducer;