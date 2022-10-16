import React, {memo} from 'react';
import Pagination from '@mui/material/Pagination';
import {PaginationWrapper} from "@/views/entire/c-cpns/entire-pagination/style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {changeCurrentPageAction, fetchEntireDataAction} from "@/store/modules/entire";

const EntirePagination = memo(() => {
  const { roomList, totalCount, currentPage } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }), shallowEqual)
  
  const totalPage = Math.ceil(totalCount / 20);
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;
  
  const dispatch = useDispatch();
  const pageChangeHandle = (event, activePageCount) => {
    // dispatch(changeCurrentPageAction(activePageCount));
    // dispatch(fetchEntireDataAction());

    // 替换成
    dispatch(fetchEntireDataAction(activePageCount - 1))
  }
  
  return (
    <PaginationWrapper>
      {
        !!roomList.length && (
          <div className='info'>
            <Pagination count={totalPage} onChange={pageChangeHandle} />
            <div className='desc'>
              第 {startCount} - {endCount} 个房源，共 {totalCount}个房源
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  );
});

export default EntirePagination;