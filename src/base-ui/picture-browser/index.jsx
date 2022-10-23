import React, {memo, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {BrowserWrapper} from "@/base-ui/picture-browser/style";
import IconClose from "@/assets/svg/icon-close";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 当图片浏览器展示出来时，滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])
  
  const closedBtnClickHandle = () => {
    if(closeClick) closeClick();
  }
  
  const controlClickHandle = (isNext = true) => {
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = pictureUrls.length - 1;
    if (newIndex > pictureUrls.length - 1) newIndex = 0;
    
    setCurrentIndex(newIndex);
  }
  
  return (
    <BrowserWrapper>
      <div className='top'>
        <div className='close-btn' onClick={closedBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn left' onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className='btn right' onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className='picture'>
          <img src={pictureUrls[currentIndex]} alt="" />
        </div>
      </div>
      <div className='preview'></div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {

};

export default PictureBrowser;