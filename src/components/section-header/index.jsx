import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {HeaderWrapper} from "@/components/section-header/style";

const SectionHeader = memo((props) => {
  const { title, subtitle = '默认子标题的数据' } = props;
  
  return (
    <HeaderWrapper>
      <h2>{title}</h2>
      { subtitle && <div className='subtitle'>{subtitle}</div> }
    </HeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default SectionHeader;