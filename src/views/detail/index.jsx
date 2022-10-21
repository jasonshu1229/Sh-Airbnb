import React, {memo} from 'react';
import {DetailWrapper} from "@/views/detail/style";
import DetailPictures from "@/views/detail/c-cpns/detail-pictures";
import DetailInfos from "@/views/detail/c-cpns/detail-infos";

const Detail = memo((props) => {
  
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;