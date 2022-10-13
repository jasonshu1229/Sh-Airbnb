import React, {memo, useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {SectionV2Wrapper} from "@/views/home/c-cpns/home-section-v2/style";
import SectionHeader from "@/components/section-header";
import SectionTabs from "@/components/section-tabs";
import SectionRooms from "@/components/section-rooms";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const { infoData } = props;
  
  // initialName 的值一开始可能为空，所以需要 isEmptyObject
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map(item => item.name);
  // 方法二:
  // useEffect(() => {
  //   setName('xxx');
  // }, [infoData])
  
  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, [])
  
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.333333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
};

export default HomeSectionV2;