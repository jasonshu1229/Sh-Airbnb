import React, {memo, useEffect} from 'react';
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";
import {useDispatch} from "react-redux";
import {fetchEntireDataAction} from "@/store/modules/entire";
import EntireRooms from "@/views/entire/c-cpns/entire-rooms";
import EntirePagination from "@/views/entire/c-cpns/entire-pagination";
import {changeHeaderConfigAction} from "@/store/modules/main";

const Entire = memo(() => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({ isFixed: true }));
  }, [dispatch])
  
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
});

export default Entire;