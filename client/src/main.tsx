import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import router from './router/router';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouterProvider router={router} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
