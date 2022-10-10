import React, {memo} from 'react';
import {HeaderWrapper} from "@/components/app-header/style";
import HeaderLeft from "@/components/app-header/c-cpns/header-left";
import HeaderCenter from "@/components/app-header/c-cpns/header-center";
import HeaderRight from "@/components/app-header/c-cpns/header-right";

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  );
});

export default AppHeader;