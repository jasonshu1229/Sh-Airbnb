import React, {memo} from 'react';
import PropTypes from 'prop-types';
import RoomItem from "@/components/room-item";
import {RoomsWrapper} from "@/components/section-rooms/style";

const SectionRooms = memo((props) => {
  const { roomList  = [], itemWidth } = props;
  
  console.log(itemWidth)
  
  return (
    <RoomsWrapper className='room-list'>
      {
        roomList.slice(0, 8).map(item => {
          return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        })
      }
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array
};

export default SectionRooms;