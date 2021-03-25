import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
  body {
    color: ${(props) => (props.theme === 'purple' ? 'purple' : 'white')};
  }
	h1{
		font-size: 50px
	}
`
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle theme='purple' />
      {children}
    </React.Fragment>
  )
}

export default Layout
