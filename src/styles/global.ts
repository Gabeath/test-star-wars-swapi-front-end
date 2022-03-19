import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, san-serif;
  }

  button {
    background: ${props =>
      props.theme.colors.button.background} none repeat scroll 0 0;
    border-color: ${props => props.theme.colors.button.borderColor};
    color: ${props => props.theme.colors.button.text};
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0;
    border-radius: 4px;
  }
`
