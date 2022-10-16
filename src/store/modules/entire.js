import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getEntireRoomList} from "@/services/modules/entire";

export const fetchEntireDataAction = createAsyncThunk(
    'fetch/entireData',
  async (payload = 0 , { dispatch, getState }
  ) => {
  // payload 就是 pageIndex
  // 1. 考虑到分页组件中可能会切换改变 pageIndex，所以先改变 pageIndex，初始值是0
  dispatch(changeCurrentPageAction(payload));
  
  // 2. 根据页码获取最新的数据
  // const currentPage = getState().entire.currentPage;
  const res = await getEntireRoomList(payload * 20);
  
  // 3. 获取到最新的数据，保存 redux 的 store中
  const roomList = res.list;
  const totalCount = res.totalCount;
  dispatch(changeRoomListAction(roomList));
  dispatch(changeTotalCountAction(totalCount));
  
  return res;
})

const entireSlice = createSlice({
  name: 'entire',
  initialState: {
    currentPage: 0,
    roomList: [],
    totalCount: 0
  },
  reducers: {
    changeCurrentPageAction(state, { payload }) {
      state.currentPage = payload;
    },
    changeRoomListAction(state, { payload }) {
      state.roomList = payload;
    },
    changeTotalCountAction(state, { payload }) {
      state.totalCount = payload;
    }
  },
  extraReducers: {
    [fetchEntireDataAction.fulfilled](state, { payload }) {
      // state.currentPage = payload.currentPage;
      state.roomList = payload.list;
      state.totalCount = payload.totalCount;
    }
  }
})

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction
} = entireSlice.actions;

export default entireSlice.reducer;