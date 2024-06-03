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
import store from './Redux/Store'; 
import App from './App';
import './App.css';
import './Components/FontAwesome'; 
// import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


