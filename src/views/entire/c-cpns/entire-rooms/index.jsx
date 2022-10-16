import React, {memo} from 'react';
import {RoomsWrapper} from "@/views/entire/c-cpns/entire-rooms/style";
import {shallowEqual, useSelector} from "react-redux";
import RoomItem from "@/components/room-item";

const EntireRooms = memo(() => {
  const { roomList, totalCount } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount
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
    </RoomsWrapper>
  );
});

export default EntireRooms;