import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-size: 100%;
	  background-repeat: no-repeat;
  }

  body:before {
    content:'';
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    background-image: linear-gradient(#25212e, #402744);
  }

  body, input, button, textarea {
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    /* font-size: 24px;
    padding: 20px 25px;
    border-radius: 6px;
    border: none;
    margin: 7px;
    font-weight: bold; */
  }

  input, textarea {
     font-size: 24px;
    /* background-color: #271d2d;
    color: #999;
    padding: 20px 25px;
    border-radius: 6px;
    border: none;
    margin: 7px; */
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
