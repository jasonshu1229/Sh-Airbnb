import React, {memo} from 'react';
import PropTypes from 'prop-types';
import SectionHeader from "@/components/section-header";
import LongforItem from "@/components/longfor-item";
import {LongforWrapper} from "@/views/home/c-cpns/home-longfor/style";
import ScrollView from "@/base-ui/scroll-view";

const HomeLongfor = memo((props) => {
  const { infoData } = props;
  
  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title}  subtitle={infoData.subtitle} />
      <div className='longfor-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  );
});

HomeLongfor.propTypes = {
  infoData: PropTypes.object
};

export default HomeLongfor;