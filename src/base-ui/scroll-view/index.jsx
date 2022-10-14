import React, {memo, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {ViewWrapper} from "@/base-ui/scroll-view/style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0); // 偏移量的索引
  const totalDistanceRef = useRef(); // 保存一开始最大的可偏移的距离(scrollWidth - clientWidth)
  
  // 组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度（包括隐藏 的部分）
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRightBtn(totalDistance > 0)
  }, [props.children])
  
  const controlClickHandle = (isRight) => {
    const currentIndex = isRight ? posIndex + 1 : posIndex - 1;
    const currentEl = scrollContentRef.current.children[currentIndex];
    const currentElOffsetLeft = currentEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${currentElOffsetLeft}px)`;
    setPosIndex(currentIndex);
    // 是否继续显示右侧的按钮
    setShowRightBtn(totalDistanceRef.current > currentElOffsetLeft);
    // 是否显示左侧的按钮
    setShowLeftBtn(currentElOffsetLeft > 0);
  }
  
  return (
    <ViewWrapper>
      { showLeftBtn && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      { showRightBtn && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          { props.children }
        </div>
      </div>
    </ViewWrapper>
  );
});

ScrollView.propTypes = {

};

export default ScrollView;