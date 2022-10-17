import React, {memo} from 'react';
import {RoomsWrapper} from "@/views/entire/c-cpns/entire-rooms/style";
import {shallowEqual, useSelector} from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)
  
  return (
    <RoomsWrapper>
      <h2 className='title'>{totalCount}家住宿</h2>
      <div className='list'>
        {
          roomList.map((item) => {
            return (
              <RoomItem
                itemData={item}
                itemWidth="20%"
                key={item.id}
              />
            )
          })
        }
      </div>
  
      { isLoading && <div className='cover'></div> }
    </RoomsWrapper>
  );
});

export default EntireRooms;