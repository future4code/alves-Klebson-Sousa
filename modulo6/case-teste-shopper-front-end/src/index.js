import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import { CssBaseline } from '@mui/material';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ul, li{
      list-style-type: none;
    }
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CssBaseline/> */}
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

