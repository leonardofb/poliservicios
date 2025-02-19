import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Si tienes estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
//import './assets/css/style-starter.css';// Importar estilos globales
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


