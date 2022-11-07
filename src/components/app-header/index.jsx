import React, {memo} from 'react';
import {HeaderWrapper} from "@/components/app-header/style";
import HeaderLeft from "@/components/app-header/c-cpns/header-left";
import HeaderCenter from "@/components/app-header/c-cpns/header-center";
import HeaderRight from "@/components/app-header/c-cpns/header-right";
import {shallowEqual, useSelector} from "react-redux";
import classNames from "classnames";

const AppHeader = memo(() => {
  
  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed } = headerConfig;
  console.log('isFixed', isFixed);
  
  return (
    <HeaderWrapper className={classNames({ fixed: isFixed })}>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;