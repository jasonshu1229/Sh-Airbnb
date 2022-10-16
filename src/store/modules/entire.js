import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getEntireRoomList} from "@/services/modules/entire";

export const fetchEntireDataAction = createAsyncThunk('fetch/entireData', async (payload, { dispatch, getState }) => {
  const currentPage = getState().entire.currentPage;
  
  const res = await getEntireRoomList(currentPage * 20);
  
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
      console.log(payload)
    }
  }
})

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction
} = entireSlice.actions;

export default entireSlice.reducer;