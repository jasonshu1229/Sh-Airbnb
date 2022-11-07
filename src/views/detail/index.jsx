import React, {memo, useEffect} from 'react';
import {DetailWrapper} from "@/views/detail/style";
import DetailPictures from "@/views/detail/c-cpns/detail-pictures";
import DetailInfos from "@/views/detail/c-cpns/detail-infos";
import {useDispatch} from "react-redux";
import {changeHeaderConfigAction} from "@/store/modules/main";

const Detail = memo((props) => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false }));
  }, [dispatch])
  
  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;