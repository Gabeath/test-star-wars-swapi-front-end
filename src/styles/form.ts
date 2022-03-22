import styled from 'styled-components'

export const FormContainer = styled.body`
  background-image: url('https://hdwallsource.com/img/2014/2/apple-galaxy-wallpaper-23337-23988-hd-wallpapers.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
  padding: 10px;

  img {
    display: block;
    top: 50%;
    width: 100%;
    max-width: 203px;
    height: 100%;
    max-height: 88px;
    margin: -44px auto 0;
    box-sizing: border-box;
    background-size: contain;
    margin-bottom: 10px;
  }

  .main-div {
    background: ${props => props.theme.colors.background} none repeat scroll 0 0;
    border-radius: 2px;
    margin: 10px auto 30px;
    max-width: 38%;
    padding: 80px 70px 80px 71px;
  }
`
