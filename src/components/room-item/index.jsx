import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {ItemWrapper} from "@/components/room-item/style";

const RoomItem = memo((props) => {
  const { itemData } = props;
  
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object
};

export default RoomItem;