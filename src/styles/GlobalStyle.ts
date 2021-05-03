import { createGlobalStyle } from 'styled-components'
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    color: #444;
  }

  body {
    background-color: #999;
  }
  
  .noscroll {
    position: fixed;
    width: 100%;
    overflow-y: scroll;
    overflow: hidden;
  }
`
