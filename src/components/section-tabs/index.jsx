import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {TabsWrapper} from "@/components/section-tabs/style";
import classNames from "classnames";

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props;
  const [ currentIndex, setCurrentIndex] = useState(0);
  
  const itemClickHandle = (index, name) => {
    setCurrentIndex(index);
    tabClick(index, name);
  }
  
  return (
    <TabsWrapper>
      {
        tabNames.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames("item", { active: index === currentIndex})}
              onClick={e => itemClickHandle(index, item)}
            >{item}</div>
          )
        })
      }
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabNames: PropTypes.array
};

export default SectionTabs;