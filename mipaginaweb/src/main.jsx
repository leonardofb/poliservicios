import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css'; // Si tienes estilos globales
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
);