import React, {memo, useState} from 'react';
import fitlerData from '@/assets/data/filter_data.json';
import {FilterWrapper} from "@/views/entire/c-cpns/entire-filter/style";
import classNames from "classnames";

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);
  
  const itemClickHandle = (item) => {
    const newItems = [...selectItems];
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filterItem => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }
  
  return (
    <FilterWrapper>
      <div className='filter'>
        {
          fitlerData.map((item) => {
            return (
              <div
                className={classNames("item", { active: selectItems.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;