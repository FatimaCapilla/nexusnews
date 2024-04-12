import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './context/AuthContext.jsx'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
   
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa BrowserRouter y otras dependencias necesarias
// import router from './router/router.jsx';
// import AuthProvider from './context/AuthContext.jsx';
// import Dashboard from './Dashboard';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <AuthProvider>
//             <Router>
//                 <Switch>
//                     <Route exact path="/dashboard" component={Dashboard} /> {"./context/AuthContext.jsx"}
//                     {/* Otras rutas de tu aplicación */}
//                 </Switch>
//             </Router>
//         </AuthProvider>
//     </React.StrictMode>