import React, {memo, useEffect} from 'react'
import {HomeWrapper} from "@/views/home/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHomeDataAction} from "@/store/modules/home";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction('123'))
  }, [dispatch])
  
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <h2>{goodPriceInfo.title}</h2>
      </div>
    </HomeWrapper>
  )
})

export default Home
