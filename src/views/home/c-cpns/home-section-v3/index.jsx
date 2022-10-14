import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {SectionV3Wrapper} from "@/views/home/c-cpns/home-section-v3/style";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import ScrollView from "@/base-ui/scroll-view";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props;
  
  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id} />
            })
          }
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  );
});

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV3;