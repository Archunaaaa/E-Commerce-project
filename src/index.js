// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./App.css";
// import { Provider } from "react-redux";
// import store from "./Redux/Store";
// import './Components/FontAwesome';
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>                                                  
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store'; // Ensure the path to your store is correct
import App from './App';
import './App.css';
import './Components/FontAwesome'; // Ensure the path is correct

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


