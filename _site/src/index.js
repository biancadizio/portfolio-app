import React from 'react';
import ReactDOM from 'react-dom';
// import { createGlobalStyle } from 'styled-components';
import App from './App';
import styled from "styled-components";

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: Arial, sans-serif;
//     padding-left: 0;
//     padding-right: 0;
//     width: 100%;
//   }
// `;

export const ContainerApp = styled.div`
  width: 100%;
  height: 100%;
  // background-color: red;
  `;  

ReactDOM.render(
  <React.StrictMode>
    <ContainerApp>
    <App />
    </ContainerApp>
  </React.StrictMode>,
  document.getElementById('root')
);
