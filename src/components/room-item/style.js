import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 25%;
  padding: 8px;
  box-sizing: border-box;
  
  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    box-sizing: border-box;
    border-radius: 3px;
    overflow: hidden;
    
    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  
  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: ${props => props.verifyColor};
  }
  
  .name {
    font-size: 16px;
    font-weight: 700;
    
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  .price {
    margin: 8px 0;
  }
`