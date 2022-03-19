import styled from 'styled-components'

export const LoginContainer = styled.body`
  background-image: url('https://hdwallsource.com/img/2013/03/stars-wallpaper-2286.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 10px;

  .main-div {
    background: ${props => props.theme.colors.background} none repeat scroll 0 0;
    border-radius: 2px;
    margin: 10px auto 30px;
    max-width: 38%;
    padding: 50px 70px 70px 71px;
  }

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
  }

  .login-form .form-control {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }

  .login-form .form-group {
    margin-bottom: 10px;
  }
  .login-form {
    text-align: center;
  }
  .forgot a {
    color: #777777;
    font-size: 14px;
    text-decoration: underline;
  }
  /* .login-form .btn.btn-primary {
    background: #f0ad4e none repeat scroll 0 0;
    border-color: #f0ad4e;
    color: #ffffff;
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0;
  } */
  .forgot {
    text-align: left;
    margin-bottom: 30px;
  }
  .bottom-text {
    color: #ffffff;
    font-size: 14px;
    margin: auto;
  }
  /* .login-form .btn.btn-primary.reset {
    background: #ff9900 none repeat scroll 0 0;
  } */
  .back {
    text-align: left;
    margin-top: 10px;
  }
  .back a {
    color: #444444;
    font-size: 13px;
    text-decoration: none;
  }
`
