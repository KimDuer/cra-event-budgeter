import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app'

initializeApp({
  apiKey: "AIzaSyDFLq2YahShmw7weq9O3ex0SjQjFid3F7c",
  authDomain: "cra-event-budgeter.firebaseapp.com",
  projectId: "cra-event-budgeter",
  storageBucket: "cra-event-budgeter.appspot.com",
  messagingSenderId: "671947328237",
  appId: "1:671947328237:web:284a6ab6ba75c9a1589ae4",
  measurementId: "G-NP69S1HPTL"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
