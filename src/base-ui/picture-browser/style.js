import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
  z-index: 999; // -1 1 9 99 999
  
  .top {
    position: relative;
    height: 86px;
    
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
`