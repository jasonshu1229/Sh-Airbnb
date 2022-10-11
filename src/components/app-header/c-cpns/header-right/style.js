import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  color: ${props => props.theme.text.primaryColor};
  font-weight: 500;
  
  .btns {
    display: flex;
    
    .btn {
      height: 18px;
      line-height: 18px;
      border-radius: 22px;
      padding: 12px 15px;
      box-sizing: content-box;
      cursor: pointer;
      
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  
  .profile {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    box-sizing: border-box;
    cursor: pointer;
    
    ${props => props.theme.mixin.boxShadow};
    
    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      color: #666;
      
      .top, .bottom {
        padding: 10px 0;
        
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      
      .top {
        border: 1px solid #ddd;
      }
    }
  }


`
