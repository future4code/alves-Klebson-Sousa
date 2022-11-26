import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ul, li{
      list-style-type: none;
    }
    html, body, #root {
      max-height: 100vh;
      max-width: 100vw;

      width: 100%;
      height: 100%;
    }
    *, button, input {
      border: 0;
      background: none;
      font-family: "Lato";
    }
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);


