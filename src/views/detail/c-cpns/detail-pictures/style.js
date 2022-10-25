import styled from "styled-components";

export const PicturesWrapper = styled.div`
  position: relative;
  
  > .pictures {
    display: flex;
    height: 600px;
    background-color: #000;
    
    &:hover {
      .cover {
        opacity: 1 !important;
      }
      
      .item:hover {
        .cover {
          opacity: 0 !important;
        }
      }
    }
  }
  
  .left, .right {
    width: 50%;
    height: 100%;
    
    .item {
      position: relative;
      height: 100%;
      overflow: hidden;
      cursor: pointer;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        
        transition: transform 0.3s ease-in;
      }
      
      .cover {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, .3);
        transition: opacity 200ms ease;
      }
      
      &:hover {
        img {
          transform: scale(1.07);
        }
      }
    }
  }
  
  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }
  
  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    padding: 6px 15px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
  }
  
  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    
    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;
      
      .desc {
        display: flex;
        justify-content: space-between;
        
        .toggle {
          cursor: pointer;
        }
      }
      
      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props => props.showList ? "67px": "0"};
        
        .item {
          margin-right: 15px;
          cursor: pointer;
          
          img {
            height: 67px;
            opacity: 0.5;
          }
          
          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`