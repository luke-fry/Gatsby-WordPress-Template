import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`

const Layout = ({ children }) => {
    return (
      <>
        <GlobalStyles />
        {children}
      </>
    )
  }
  
  export default Layout