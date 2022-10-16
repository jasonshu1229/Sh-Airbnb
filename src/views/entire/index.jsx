import React, {memo} from 'react';
import {EntireWrapper} from "@/views/entire/style";
import EntireFilter from "@/views/entire/c-cpns/entire-filter";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <EntireFilter />
      <div className='rooms'>room-section</div>
      <div className='pagination'>pagination-section</div>
    </EntireWrapper>
  );
});

export default Entire;