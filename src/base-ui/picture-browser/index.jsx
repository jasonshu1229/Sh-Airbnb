import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {BrowserWrapper} from "@/base-ui/picture-browser/style";
import IconClose from "@/assets/svg/icon-close";

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props;
  
  const closedBtnClickHandle = () => {
    if(closeClick) closeClick();
  }
  
  return (
    <BrowserWrapper>
      <div className='top'>
        <div className='close-btn' onClick={closedBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className='slider'></div>
    </BrowserWrapper>
  );
});

PictureBrowser.propTypes = {

};

export default PictureBrowser;