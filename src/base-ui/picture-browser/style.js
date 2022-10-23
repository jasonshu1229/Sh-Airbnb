import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
  z-index: 999; // -1 1 9 99 999
  
  display: flex;
  flex-direction: column;
  
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
  
  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
  
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
    
    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh;
      
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
        object-fit: cover;
      }
    }
  }
  
  .preview {
    height: 100px;
    margin-top: 10px;
  }
`