import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  
  .i-content {
    display: flex;
    position: relative;
    
    > * {
      flex-shrink: 0;
    }
  }
`