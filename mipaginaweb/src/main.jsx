
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Si tienes estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);
/*
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/