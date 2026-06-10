// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './App.jsx'

// import { BrowserRouter } from 'react-router-dom'
// import Context from './Context.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Context>   

//     <App />
//     </Context>
 


//   </StrictMode>,
// )




import React from "react";
import ReactDOM from "react-dom/client";
import Dark from "./Dark";
import App from "./App";
import "./Dark.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Dark>
    <App />
  </Dark>
);