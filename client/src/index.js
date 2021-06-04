import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks"; //Nos ayuda a hacer las consultas y mutaciones en GQL

//Le pasamos la dirección de la API en donde se esta ejecutando 
const Client = new ApolloClient({
  uri: 'http://localhost:4000'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client = {Client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
