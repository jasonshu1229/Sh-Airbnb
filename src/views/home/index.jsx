import React, {memo, useCallback, useEffect, useState} from 'react'

import {HomeWrapper} from "@/views/home/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "@/views/home/c-cpns/home-section-v1";
import HomeSectionV2 from "@/views/home/c-cpns/home-section-v2";
import {isEmptyObject} from "@/utils";

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
        { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} /> }
        { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} /> }
        { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} /> }
      </div>
      
    </HomeWrapper>
  )
})

export default Home
