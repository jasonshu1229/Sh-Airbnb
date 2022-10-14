import React, {memo, useEffect } from 'react'

import {HomeWrapper} from "@/views/home/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "@/views/home/c-cpns/home-section-v1";
import HomeSectionV2 from "@/views/home/c-cpns/home-section-v2";
import {isEmptyObject} from "@/utils";
import HomeLongfor from "@/views/home/c-cpns/home-longfor";
import HomeSectionV3 from "@/views/home/c-cpns/home-section-v3";

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual);
  
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"))
  }, [dispatch])
  
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} /> }
        { isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} /> }
  
        { isEmptyObject(longforInfo) && <HomeLongfor infoData={longforInfo} /> }

        { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} /> }
        { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} /> }
  
        { isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
      
    </HomeWrapper>
  )
})

export default Home
