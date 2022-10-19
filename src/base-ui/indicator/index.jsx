import React, {memo, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {IndicatorWrapper} from "@/base-ui/indicator/style";

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();
  
  useEffect(() => {
    // 1. 获取 selectIndex对应的 item
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemOffsetLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;
    // 2. 获取 content 的宽度
    // 2.1 clientWidth 计算内容可视区的宽度
    // 2.2 scrollWidth 计算内容的实际宽度（包含被隐藏掉的）
    // scrollWidth > clientWidth
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    // 3. 获取 selectIndex 要滚动的距离
    let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5;
    
    // 4. 特殊情况的边界处理
    if (distance < 0) distance = 0; // 左边界的处理（不能return 否则将无法移动）
    const totalDistane = contentScroll - contentWidth; // // 计算内容区最大的可移动距离
    if (distance > totalDistane) distance = totalDistane; // 右边特殊情况的处理
    
    // 5. 改变位置即可
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex])
  
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number
};

export default Indicator;