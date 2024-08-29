import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Seemore from './seemore';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allroutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/about-us',
      element:<Seemore/>
    },
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allroutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
