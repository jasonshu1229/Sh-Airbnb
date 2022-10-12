import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {SectionV1Wrapper} from "@/views/home/c-cpns/home-section-v1/style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const HomeSectionV1 = memo((props) => {
  const { infoData } = props;
  
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth="25%" />
    </SectionV1Wrapper>
  );
});

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV1;
