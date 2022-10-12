import React, {memo, useEffect} from 'react'

import {HomeWrapper} from "@/views/home/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "@/views/home/c-cpns/home-section-v1";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo
  }), shallowEqual);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"))
  }, [dispatch])
  
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <div className='discount'>
          <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}/>
          <SectionRooms roomList={discountInfo.dest_list?.["成都"]} itemWidth="33.333333%" />
        </div>
        
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highScoreInfo} />
      </div>
      
    </HomeWrapper>
  )
})

export default Home
